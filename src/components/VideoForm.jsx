import React, { Component } from 'react'
import {connect} from "react-redux"
import  {addVideo} from "../actions/videos"

export class VideoForm extends Component {
    //controled input 
    state ={
        song: "",
        name: ""
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <lable htmlFor="song">Song</lable>
                    <input onChange={this.handleChange} type="text" name="song" id="" value={this.state.song}/>
                    <br></br>
                    <lable htmlFor="name">name of rapper</lable>
                    <input onChange={this.handleChange} type="text" name="name" id="" value={this.state.name}/>
                    <br></br>
                    <button>add music video</button>
                   
                </form>
            </div>
        )
    }
}

export default connect(null, {addVideo})(VideoForm)
