import React from 'react';
import './Face.css';
import faceImg from '../img/fullface.png';

const Face =()=>{
    return(
        <div className="faceIcon">
            <div className="faceBtn">
                <button className="about-btn">
                    <img src={faceImg} id="face" alt="submit"/>
                </button>
            </div>
        </div>
    )
}

export default Face;