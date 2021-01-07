import React, { Component } from 'react';

class BirthdayButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          position:  this.props.age 
      };
  }
  
  render() {
      return (
          <fieldset>
              <button onClick={ this.switch }>Birthday Button for { this.props.firstName } { this.props.lastName } </button>
          </fieldset>
      );
  }
  switch = () => {
      var age = this.state.position
      age++;
      this.state = {
        position:  age 
    };
  }
}    
export default BirthdayButton