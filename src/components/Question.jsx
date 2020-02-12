import React, { Component } from 'react';
// import components


class Question extends Component {
  
  render() {
    
    return (
      <div>
        {this.props.question_text}

      </div>
    );
  }
}

export  {Question} ;