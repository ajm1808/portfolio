import React from 'react';
import './navbar2.css';

const Navbar2=()=>{
    return(
        <div className="navbar2">
            <div className="nb2">
                <p id="proj">
                Projects
                </p>
                <ul id="pg2l">
                    <li><a className="pg2list" href="#home" id="home">Home</a></li>
                    <li><a className="pg2list" href="#news" id="news">News</a></li>
                    <li><a className="pg2list" href="#contact" id="contact">Contact</a></li>
                    <li><a className="pg2list" href="#menu" id="menu">Menu</a></li>
                </ul>
            </div>
        </div>
    ) 
}

export default Navbar2;