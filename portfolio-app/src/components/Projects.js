import React from 'react';
import './Projects.css';
import git from '../img/git.png';

const Projects=()=>{
    return(
        <div className ="projects">
            <div className= "project project1">
                <p>Zen Garden</p>
                <p>Project 1</p>
                <a href="">link</a>
            </div>
            <div className= "project project2">
                <p>1 Player Dice</p>
                <p>Project 2</p>
                <a href="https://github.com/ajm1808/dicegame"><img src={git} id="github"/></a>
            </div>
            <div className= "project project3">
                <p>Cyber Pet</p>
                <p>Project 3</p>
                <a href="https://github.com/ajm1808/cyberpet"><img src={git} id="github"/></a>
            </div>
            <div className= "project project4">
                <p>2 Player Dice</p>
                <p>Project 4</p>
                <a href="https://github.com/ajm1808/dicegame/tree/master/Dicegame2"><img src={git} id="github"/></a>
            </div>
            <div className= "project project5">
                <a href="">Experience</a>
                <a href=""><img src="img/home.png" id="home"/></a>
                <a href="">Social media</a>
            </div>

        </div>
    )
}

export default Projects;