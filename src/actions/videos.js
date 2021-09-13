export const fetchVideos = () => {

    return dispatch => {
        dispatch({type: "START_FETCHING_VIDEOS"})
        fetch("http://localhost:3001/videos")
        .then(resp => resp.json())
        .then(videos => {
            dispatch({type:"ADDING_VIDEOS", videos})
        })
    }

}

export const addVideo = () => {
    return dispatch => {
        // debugger
        dispatch({type: "START_FETCHING_VIDEOS"})
        fetch("http://localhost:3001/videos")
        .then(resp => resp.json())
        .then(video => {
            dispatch({type:"ADDING_VIDEO", video})
        })
    }

}