import React, { Component } from 'react'
import {connect} from "react-redux"
import  { addVideo } from "../actions/videos"


 class VideoForm extends Component {
    //controling input with the state 
    state={
        videos: []
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // debugger
       this.props.addVideo(this.state)
    //    as a courtesy for the client
       this.setState({
           name: "",
           song: ""
       })

    }

    handleChange = (e) => {
        // debugger
       const elName = e.target.name
       const elValue = e.target.value
        this.setState({[elName]: elValue})
    }
    

    

    render() {
        return (
            <div className="container">
            <h2>video form below</h2>
                <form onSubmit={this.handleSubmit}>
                    <lable htmlFor="name">Name of rapper</lable>
                    <input onChange={this.handleChange} type="text" name="name" id="name" value={this.state.name}/>
                    <br></br>
                    <lable htmlFor="song">Name of song</lable>
                    <input onChange={this.handleChange} type="text" name="song" id="song" value={this.state.song}/>
                    <br></br>
                    {/* <lable htmlFor="rapper_name">Name of song</lable>
                    <input onChange={this.handleChange} type="text" name="rapper_name" id="" value={this.state.video.rapper.name}/> */}
                    <br></br>
                    <button>add music video</button>
                </form>


            </div>
        )
    }
}


export default connect(null, {addVideo})(VideoForm)
