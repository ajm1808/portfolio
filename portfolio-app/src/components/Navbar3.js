import React from 'react';
import './navbar3.css';

const Navbar3=()=>{
    return(
        <div className="navbar3">
            <div className="nb3">
                <p id="skills">
                Skills
                </p>
                <ul id="pg3l">
                    <li><a className="pg3list" href="#home" id="home">Home</a></li>
                    <li><a className="pg3list" href="#news" id="news">News</a></li>
                    <li><a className="pg3list" href="#contact" id="contact">Contact</a></li>
                    <li><a className="pg3list" href="#menu" id="menu">Menu</a></li>
                </ul>
            </div>
        </div>
    ) 
}

export default Navbar3;