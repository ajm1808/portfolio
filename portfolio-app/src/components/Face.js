import React from 'react';
import './Face.css';
import faceImg from '../img/fullface.png';

const Face =()=>{
    return(
        <div className="FaceIcon">
            <button class="about-btn">
                <img src={faceImg} id="face" alt="submit"/>
                </button>
        </div>
    )
}

export default Face;