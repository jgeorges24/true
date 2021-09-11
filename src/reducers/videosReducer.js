const videosReducer = (state = {videos: [], requesting: true}, action) => {
    switch (action.type) {
        case "START_FETCHING_VIDEOS":
            return {
                ...state,
                requesting: true
            }
            break;
        case "ADDING_VIDEOS":
            return {
                ...state,
                requesting: false,
                videos: [...action.videos]
            }
            break;
        case "ADDING_VIDEO":
            return {
                ...state,
                requesting: false,
                videos: [...state.videos, action.video]
            }
            break;
    
        default:
            return state
            break;
    }
}

export default videosReducer

