import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchVideos, addVideo } from "../actions/videos"
import Video from "../components/Video"
import VideoForm from "../components/VideoForm"


export class Videos extends Component {

    
    componentDidMount(){
        
        this.props.fetchVideos()
        
    }
    state = {
        videos: []
    }
    
// this way adds all the previouse vids plus new ones
    addVideo = (video) => {
        this.setState({
            videos: [...this.state.videos, video]
        })

    }
    
    
    render() {

        let videos = this.state.videos.map(video => {
            return(
                <Video/>
            ) 

        })

        return (
            <div className="center">
                <h1> Music Videos container </h1>
                
                {this.props.requesting ? <h1>Loading...that BAP BAP!!!</h1> : this.props.videos.map(video => <div className="center container"> <p>SONG: {video.song} <br></br> RAPPER: {video.rapper.name} <br></br> AGE: {video.rapper.age}</p></div>)}
                

                <br></br>
                <VideoForm addVideo={this.addVideo}/>
                {videos}
            </div>
        )
    }
}

const mapStateToProps = ({videosReducer}) => {
    return {
    videos: videosReducer.videos,
    requesting: videosReducer.requesting
    }
}

export default connect(mapStateToProps, { fetchVideos, addVideo })(Videos)
