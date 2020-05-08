/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "./App.css";
// Sally Student shizz
import Experience from "./Experience";
import Education from "./Education";
import Contacts from "./Contacts";
// Ali Mentor shizzness
import Button from './Button';
import Number from './Number';
import InputForm from './Input';

/*
  [1] render a button and a number, every button click increments the number
  [2] instead of rendering the number, instead render 'even' or 'odd'
  [3] controlled form (controlled inputs) - user will submit some text, render the text itself as well as the length of the text

*/

class App extends React.Component {

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
        <InputForm />
        <hr />
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
