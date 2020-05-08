import React from 'react';

// per: https://reactjs.org/docs/forms.html

class InputForm extends React.Component {

  constructor(props) {
    super(props);
    // ^^^^^^^^^
    // In JavaScript, 'super' refers to the parent class constructor. (In our example, it points to the React.Component implementation.)
    // You can’t use 'this' in a constructor until after you’ve called the parent constructor.
    // For details: https://overreacted.io/why-do-we-write-super-props/

    // Don't call this.setState() here within the constructor()!
    // Instead, assign the initial state like so...
    this.state = {value: ''};

    console.log(this.state);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Something was submitted: ' + this.state.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Whatever:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p className="inputResults">{this.state.value}</p>
        <p className="inputResults">{this.state.value.length}</p>
      </div>
    );
  } 
}

export default InputForm;