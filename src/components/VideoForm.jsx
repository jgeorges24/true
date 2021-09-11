import React, { Component } from 'react'
import {connect} from "react-redux"
import  {addVideo} from "../actions/videos"

export class VideoForm extends Component {
    //controling input with the state 
    state ={
        song: "",
        name: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addVideo(this.state)
        
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value            
        })

    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <lable htmlFor="song">Name of Song</lable>
                    <input onChange={this.handleChange} type="text" name="song" id="" value={this.state.song}/>
                    <br></br>
                    <lable htmlFor="name">Name of Rapper</lable>
                    <input onChange={this.handleChange} type="text" name="name" id="" value={this.state.name}/>
                    <br></br>
                    <button>add music video</button>
                   
                </form>
            </div>
        )
    }
}

export default connect(null, {addVideo})(VideoForm)
