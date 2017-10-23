import React, { Component } from 'react';

const nameInputStyles = {
  border: '1px solid black',
};

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="username">Name </label>
          <input
            type="text"
            id="username"
            style={nameInputStyles}
            value={this.state.text}
            onChange={this.handleOnChange}
          />
        </form>
      </div>
    );
  }
}

export default Name;
