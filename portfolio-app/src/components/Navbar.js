import React from 'react';
import './navbar.css';

const Navbar=()=>{
    return(
        <div className="navbar1">
            <div className="nb1">
                <p id="name">
                Andy Moore
                </p>
                <ul id="pg1l">
                    <li><a className="pg1list" href="#home" id="home">Home</a></li>
                    <li><a className="pg1list" href="#news" id="news">About Me</a></li>
                    <li><a className="pg1list" href="#contact" id="contact">Contact</a></li>
                    <li><a className="pg1list" href="#menu" id="menu">Menu</a></li>
                </ul>
            </div>
        </div>
    ) 
}

export default Navbar;