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
            </div>
        )
    }
}

export default connect(null, {fetchVideos} )(Videos)
