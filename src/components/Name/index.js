import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Name extends Component {
  render() {
    return (
      <TextField
        id="name"
        value={this.props.text}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Name;
