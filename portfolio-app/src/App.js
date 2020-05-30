import React, {Component} from 'react';
import './App.css';
import Page1 from './components/Page1';


class App extends Component{
    render(){

    
    return(
    <div className="App">
      <div className="page1">
        <Page1/>
      </div>
      <div className="page2">
        
      </div>
    </div>
    )
}
}

export default App;
