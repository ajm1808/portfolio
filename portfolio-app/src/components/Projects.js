import React from 'react';

const Projects=(props)=>{
    return(
        <div className="proj">
            <div className="proName">
                {props.name}
            </div>
            <div className="proNum">
                {props.no}
            </div>
            <div className="proLink">
                {props.link}
            </div>
            <div className="proBack">
                {props.backgroundImg}
            </div>
        </div>
    )
}

export default Projects;