import React, { Component } from 'react';
import BirthdayButton  from './BirthdayButton';
import '../App.css';

class PersonCard extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
          position:  this.props.age 
      };
  }
    switch = () => {
      let age = this.state.position
      age++;
      this.setState ( {
        position:  age 
    });
    }
    render () {
        const { firstName, lastName, age, hairColor} = this.props;
        return (
          <div>
              <h1>{ lastName }, { firstName } </h1>
              <h4>Age: {this.state.position}</h4>
              <h4>Hair Color: {hairColor}</h4>
              <button className="BirthdayButton" onClick={ this.switch }>Birthday Button for { this.props.firstName } { this.props.lastName } </button>
          </div>
        );
    }
}
export default PersonCard

