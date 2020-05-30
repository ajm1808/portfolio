import React,{Component} from 'react';
import Home from '../img/home.png';
import zen from '../img/zen.jpg';
import dice from '../img/dice.jpg';
import dog from '../img/dog.jpg';



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
    return(
        
                <div className= "project project5">
                    <a href="">Experience</a>
                    <a href=""><img src={Home} id="home"/></a>
                    <a href="">Social media</a>
                </div>
            </div>
        </div>
    )
}

export default Page2;