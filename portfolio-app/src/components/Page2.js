import React,{Component} from 'react';
import Home from '../img/home.png';
import zen from '../img/zen.jpg';
import dice from '../img/dice.jpg';
import dog from '../img/dog.jpg';
import Projects from './Projects';


class Page2 extends Component{
    state={
        projects:[
            {
                name:"Zen Garden",
                no:"Project 1",
                link:"",
                backgroundImg:zen
            },
            {
                name:"Dice Game",
                no:"Project 2",
                link:"https://github.com/ajm1808/dicegame",
                backgroundImg:dice
            },
            {
                name:"Cyber Pet",
                no:"Project 3",
                link:"https://github.com/ajm1808/cyberpet",
                backgroundImg:dog
            },
            {
                name:"2 Player Dice",
                no:"Project 4",
                link:"https://github.com/ajm1808/dicegame/tree/master/Dicegame2",
                backgroundImg:dice
            },
        ]
    }
    render(){
        const eachProject = this.state.projects.map((projects, index) => {
            return(
                <Projects 
                    index={index}
                    name={projects.name}
                    no={projects.no}
                    link={projects.link}
                    backgroundImg={projects.backgroundImg}
                />

            )
        })
        return(
            <div className="Page2">
                {eachProject}
            </div>
        )
    }
}

export default Page2;