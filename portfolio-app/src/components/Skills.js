import React from 'react';
import {motion} from "framer-motion";
import './skills.css';
import css from '../img/cssicon.png';
import html from '../img/HTMLicon.png';
import java from '../img/jsicon.png';
import photo from '../img/psicon.png';
import react from '../img/reacticon.png';
import node from '../img/nodeicon.png';

const Skills =()=>{
    return(
        <div className="container3">
            <div className="skillsTable">
                <div className="toprow">
                    <a id="lang">
                        Language
                    </a>
                    <a id="scale">
                        My skills on a scale of 0 to Mad...
                    </a>
                </div>
                <div className="html">
                    <a id="Icon">
                        <img id="Icon" src={html}/>
                    </a>
                    <div className="score">
                        <div className="skills html">40%</div>
                    </div>
                </div>
                <div className="css">
                    <a id="Icon">
                        <img id="Icon" src={css}/>
                    </a>
                    <div className="score">
                        <div className="skills css">50%</div>
                    </div>
                </div>
                <div className="js">
                    <a id="Icon">
                        <img id="Icon" src={java}/>
                    </a>
                    <div className="score">
                        <div className="skills js">30%</div>
                    </div>
                </div>
                <div className="photoshop">
                    <a id="Icon">
                        <img id="Icon" src={photo}/>
                    </a>
                    <div className="score">
                        <div className="skills photo">45%</div>
                    </div>
                </div>
                <div className="react">
                    <a id="Icon">
                        <img id="Icon" src={react}/>
                    </a>
                    <div className="score">
                        <div className="skills react">30%</div>
                    </div>
                </div>
                <div className="node">
                    <a id="Icon">
                        <img id="Icon" src={node}/>
                    </a>
                    <div className="score">
                        <div className="skills node">20%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;