import { Component } from 'react'
import {connect} from "react-redux"
import  {addVideo} from "../actions/videos"

export class VideoForm extends Component {
    
    
    
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <lable htmlFor="song">Song</lable>
                    <input onChange={this.handleChange} type="text" name="song" id="" value={this.state.title}/>
                    <br></br>
                    <lable htmlFor="name">name of rapper</lable>
                </form>
            </div>
        )
    }
}

export default connect(null, {addVideo})(VideoForm)
