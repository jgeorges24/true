import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchVideos } from "../actions/videos"

export class Videos extends Component {
    
    componentDidMount(){

        this.props.fetchVideos()

    }
    
    
    render() {
        return (
            <div>
                <h1> tracks container </h1>
                {this.props.requesting ? <h1>Loading...</h1> : this.props.videos.map(video => <h3>{video.song} - {video.name}</h3>)}
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

export default connect(mapStateToProps, {fetchVideos} )(Videos)
