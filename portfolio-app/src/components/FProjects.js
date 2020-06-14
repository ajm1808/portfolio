import React, { useState } from 'react';
import './Projects.css';
import {motion} from "framer-motion";

const FProjects=()=>{
    return(
        <div>
            <motion.ul
             whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            >
                <li className="project 1">
                Zen Garden
                </li>
                <li className="project2">
                Dice Game
                </li>
                <li className="project3">
                Trump Bot
                </li>
            </motion.ul>
        </div>
    )
};

export default FProjects;