import React from 'react';
import faceImg from '../img/fullface.png';
import {motion} from 'framer-motion';

// const aboutBTN=document.querySelector(".about-btn");
// const modalBg=document.querySelector(".modal-bg");
// const modClose=document.querySelector(".modal-close");

// aboutBTN.addEventListener("click",()=>{
//     modalBg.classList.add("bg-active");
// })

// modClose.addEventListener("click",()=>{
//     modalBg.classList.remove("bg-active");
// })

const FaceButton =()=> {
        return(
            <div className="faceBtn">
                <div className="images">
                    <button class="about-btn">
                        <motion.img drag dragConstraints={{ left: 0, right: 300 }} dragElastic={0.2} src={faceImg} id="face" alt="submit"/>
                    </button>
                </div>
                    <div class="modal-bg">
                        <div class="modal">
                            <h2 id="header">About me</h2>
                            <p id="aboutmecontent">Info about me</p>
                        <span class="modal-close">X</span>
                    </div>
                </div>   
                   
            </div>
        );
    }



export default FaceButton;