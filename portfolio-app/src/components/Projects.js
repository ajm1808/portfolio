import React, { useState } from 'react';
import './Projects.css';
import git from '../img/git.png';
import {CSSTransition} from 'react-transition-group';

const Projects=()=>{
    const [isOpen]=useState(false);
    
    toggleOpen=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    // toggleActive=(e)=>{
    //     if(e.propertyName.includes("flex"));
    //     this.setState({
    //         active:!this.state.active
    //     })
    // }
    return(
        <div className="projects">
        <CSSTransition
                in={isOpen}

                timeout={500}
                classNames="project">
            <div className= "project project1">
                <p>Zen Garden</p>
                <p onClick={()=>this.toggleOpen}>Project 1</p>
                <a href="">link</a>
            </div>
            <div className= "project project2">
                <p>1 Player Dice</p>
                <p onClick={()=>this.toggleOpen()}>Project 2</p>
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
        
        </CSSTransition>
        </div>
    )
    }


export default Projects;