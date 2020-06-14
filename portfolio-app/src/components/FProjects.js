import React from 'react';
import './Projects.css';
import {motion} from "framer-motion";
import git from '../img/git.png';

const FProjects=()=>{
    return(
        <div className="container2">
            <div id="projList"
            //  whileHover={{ scale: 1.2 }}
            // onHoverStart={e => {}}
            // onHoverEnd={e => {}}
            >
                <div className="listtitle"><a id="gitlogo" href="https://github.com/ajm1808" ><img id="git" src={git}/>
                    </a>
                    Recent Projects
                </div>
                <motion.div className="project project1" whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}} >
                    <a id="projectlinks" href="https://github.com/ajm1808/zengarden">Zen Garden</a>
                </motion.div>
                <motion.div className="project project2" whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}>
                    <a id="projectlinks" href="https://github.com/ajm1808/dicegame">
                        Dice Games
                    </a>
                </motion.div>
                <motion.div className="project project3" whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}>
                    <a id="projectlinks" href="https://github.com/ajm1808/inp/">
                        Trump Bot
                    </a>
                </motion.div>
            </div>
        </div>
    )
};

export default FProjects;