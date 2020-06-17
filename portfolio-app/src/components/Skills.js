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
                        Language
                </div>
                <div className="html">

                        <motion.img whileHover={{ scale: 1.2, rotate: 360 }} id="Icon" src={html}/>
                </div>
                <div className="css">
                    <a id="Icon">
                        <motion.img whileHover={{ scale: 1.2, rotate: 360 }} id="Icon" src={css}/>
                    </a>
                </div>
                <div className="js">
                    <a id="Icon">
                        <motion.img whileHover={{ scale: 1.2, rotate: 360 }} id="Icon" src={java}/>
                    </a>
                </div>
                <div className="photoshop">
                    <a id="Icon">
                        <motion.img whileHover={{ scale: 1.2, rotate: 360 }} id="Icon" src={photo}/>
                    </a>
                </div>
                <div className="react">
                    <a id="Icon">
                        <motion.img whileHover={{ scale: 1.2, rotate: 360 }} id="Icon" src={react}/>
                    </a>
                </div>
                <div className="node">
                    <a id="Icon">
                        <motion.img whileHover={{ scale: 1.2, rotate: 360 }} id="Icon" src={node}/>
                    </a>
                </div>
                <div className="toprow">
                        On a rating of 1 to Mad...
                </div>
                <motion.div drag
  dragConstraints={{ left: 0, right: 300 }}
  dragElastic={0.2} className="score scorehtml">
                   <a id="s">40%</a>
                </motion.div>
                <div className="score scorecss">
                       <a id="s">50%</a>
                </div>
                <div className="score scorejs">
                       <a id="s">30%</a>
                </div>
                <div className="score scorereact">
                        <a id="s">30%</a>
                </div>
                <div className="score scorephoto">
                        <div id="s">45%</div>
                </div>
                <div className="score scorenode">
                        <a id="s">20%</a>
                </div>
            </div>
        </div>
    )
}

export default Skills;