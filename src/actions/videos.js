export const fetchVideos = () => {

    return dispatch => {
        dispatch({type: "START_FETCHING_VIDEOS"})
        fetch("http://localhost:3001/videos")
        .then(resp => resp.json())
        .then(videos => {
            dispatch({type: "ADDING_VIDEOS". videos})
        })
    }

}