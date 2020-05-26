import React from 'react';
import './navbar.css';

const Navbar=()=>{
    return(
        <div className="navbar">
            <ul>
                <li><a href="#home" id="home">Home</a></li>
                <li><a href="#news" id="news">News</a></li>
                <li><a href="#contact" id="contact">Contact</a></li>
                <li><a href="#menu" id="menu">Menu</a></li>
            </ul>
            
        </div>
    ) 
}

export default Navbar;