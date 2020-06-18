import React, {Component} from 'react';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';


class App extends Component{
    render(){
    return(
    <div className="App">
      <div className="page1">
        <Page1/>
      </div>
      <div className="page2">
        <Page2/>
      </div>
      <div className="page3">
        <Page3/>
      </div>
      <div className="page4">
        <Page4/>
      </div>
    </div>
    )
}
}

export default App;
