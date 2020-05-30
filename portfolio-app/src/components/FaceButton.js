import React,{Component} from 'react';
import ReactDOM from "react-dom";
import faceImg from '../img/fullface.png';

class FaceButton extends Component {
    // state = { show: false };
  
    // showModal = () => {
    //   this.setState({ show: true });
    // };
  
    // hideModal = () => {
    //   this.setState({ show: false });
    // };
    render(){
        return(
            <div className="faceBtn">
                        <main>
                            <button type="button" className="about-btn" onClick={this.showModal}>
                                <img src={faceImg} id="face" alt="submit"/>
                            </button>
                        </main>
                   
            </div>
        );
    }
}


export default FaceButton;