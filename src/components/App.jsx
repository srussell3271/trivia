import React, { Component } from 'react';
import '../css/App.css';
// import components
import {Question} from Question.jsx;


class App extends Component {

  render() {
    
    return (

      <div className="app">
        
        <Question> </Question>
        
      </div>
    );
  }
}

export default App;