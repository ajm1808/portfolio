import React, {Component} from 'react';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';


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
    </div>
    )
}
}

export default App;
