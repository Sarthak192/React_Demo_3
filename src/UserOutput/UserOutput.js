import React from 'react';
import '../UserOutput/UserOutput.css'

const userOutput = (props)=>{
    return(
        <div className = "UserOutput">
            <p>{props.userName}</p>
            <p>I am first paragraph</p>
            <p>I am second paragraph</p>
        </div>
    )
}

export default userOutput