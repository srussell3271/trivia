import React, { Component } from 'react';



class Answer extends Component {
  
    render() {
      
      return (
        <ul>
          {
              this.props.choices.map((choice)=>{
                return<li>{choice}</li>
              })
          }
  
        </ul>
      );
    }
  }
  
  export  {Answer} ;