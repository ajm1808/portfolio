import React from 'react';
import './navbar4.css';

const Navbar4=()=>{
    return(
        <div className="navbar4">
            <div className="nb4">
                <p id="contacts4">
                Contacts
                </p>
                <ul id="pg4l">
                    <li><a className="pg4list" href="#home" id="home">Home</a></li>
                    <li><a className="pg4list" href="#news" id="news">About Me</a></li>
                    <li><a className="pg4list" href="#contact" id="contact">Contact</a></li>
                    <li><a className="pg4list" href="#menu" id="menu">Menu</a></li>
                </ul>
            </div>
        </div>
    ) 
}

export default Navbar4;