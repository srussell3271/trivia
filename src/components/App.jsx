import React, { Component } from 'react';
import data from '../sample_data.json';
import '../css/App.css';
// import components
import {Question} from "./Question.jsx";
import {Answer} from "./Answer.jsx";
//import {buildFirebase} from '../clients/firebase.js';

// /var database = buildFirebase();
// var databaseRef = database.ref("/questions");
// databaseRef.once("value").then(function(data) {
//  const questions = data.val();
// // Do something with the question
// console.log(questions)
// });



class App extends Component {

  render() {
    
    return (

      <div className="app">
        
    <Question question_text= {data.question.question_text}> </Question>
    <Answer choices= {data.question.choices}> </Answer>

      </div>
    );
  }
}

export default App;