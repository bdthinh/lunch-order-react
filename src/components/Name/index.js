import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({ text: e.target.value });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    console.log('name', this.state.text);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <TextField hintText="Your name" value={this.state.text} onChange={this.handleOnChange} />
        </form>
      </div>
    );
  }
}

export default Name;
