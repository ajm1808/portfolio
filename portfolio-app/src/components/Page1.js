import React from 'react';
import './Page1.css';
import Navbar from './Navbar';
import Face from './Face';

const Page1 =()=>{
    return(
        <div className="page1">
            <Navbar/>
            <Face/>
            <div class="modal-bg">
                    <div class="modal">
                        <h2 id="header">About me</h2>
                        <p id="aboutmecontent">
                            Info about me
                        </p>
                        <span class="modal-close">
                            X
                        </span>
                    </div>
            </div>   
        </div>
    )
}

export default Page1;