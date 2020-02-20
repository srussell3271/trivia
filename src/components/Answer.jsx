import React, { Component } from 'react';



class Answer extends Component {
  
    render() {
      return (
        <ul>
          {
              this.props.choices.map((choice, index)=>{
                return<li onClick={() => this.props.onclick(index)}>{choice}</li>
              })
          }
  
        </ul>
      );
    }
  }
  
  export  {Answer} ;