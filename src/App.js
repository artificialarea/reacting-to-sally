/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "./App.css";
import Experience from "./Experience";
import Education from "./Education";
import Contacts from "./Contacts";
import Button from './Button';
import Number from './Number';

/*
  - render a button and a number, every button click increments the number
  - instead of rendering the number, instead render 'even' or 'odd'

  // to do
  - controlled form (controlled inputs) - user will submit some text, render the text itself as well as the length of the text

*/

class App extends Component {

  state = {
    number: 0,
  }

  handleButtonClick = () => {
    const { number } = this.state;

    this.setState({
      number: number + 1
    })
  }

  render() {

    const { number } = this.state;

    return (
      <div className="App">
        <Button handleClick={this.handleButtonClick} />
        <Number number={number} />
        <hr />
        <Education />
        <Experience />
        <Contacts />
      </div>
    );
  }

}


export default App;
