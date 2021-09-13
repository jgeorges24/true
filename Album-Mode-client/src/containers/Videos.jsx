import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchVideos, addVideo } from "../actions/videos"
// import Video from "../components/Video"
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
         debugger
        this.setState({
            videos: [...this.state.videos, video]
        })

    }
    
    
    render(){

        // let xvideos = this.props.videos.map(video => {
        //     return(
        //         <div>
        //             <h2>{video.song}</h2>
        //             <p>{video.name}</p>
        //         </div>
        //     ) 

        // })

        return (
            <div className="center">

                <VideoForm addVideo={this.addVideo}/>

                <br></br>
                <h1> Music Videos container </h1>
                
                {this.props.requesting ? <h1>Loading...that BAP BAP!!!</h1> : this.props.videos.map(video => <div className="center container"> <p>SONG: {video.song} <br></br> RAPPER: {video.name} </p></div>)}
               
                

               

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
