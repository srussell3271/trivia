import React, { Component } from 'react';



class Answer extends Component {
  state={
    clicked:false
  }
    render() {
      return (
        <ul>
          {
              this.props.choices.map((choice, index)=>{
                return<li className = {
                  this.state.clicked?"strikethrough": "" 
                }
                onClick={() => {
                  this.props.onclick(index)
                  this.setState({
                    clicked:true
                  }) ;
                }
              }>{choice}</li>
              })
          }
  
        </ul>
      );
    }
  }
  
  export  {Answer} ;