import React from 'react';

// per: https://reactjs.org/docs/forms.html

class InputForm extends React.Component {

  constructor(props) {
    super(props);
    // ^^^^^^^^^
    // In JavaScript, 'super' refers to the parent class constructor. (In our example, it points to the React.Component implementation.)
    // You can’t use 'this' in a constructor until after you’ve called the parent constructor.
    // For details: https://overreacted.io/why-do-we-write-super-props/
    
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('Something was submitted: ' + this.state.value);
    alert('Something was submitted: ' + this.state.value);
    // alert('Something was submitted');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Whatever:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  } 
}

export default InputForm;