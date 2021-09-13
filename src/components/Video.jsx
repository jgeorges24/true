import React from 'react'

function Video({song, name}){
    
    return (
        <div>
            <h4>{song}</h4>
            <p>{name}</p> 
        </div>
    )
}

export default Video;
