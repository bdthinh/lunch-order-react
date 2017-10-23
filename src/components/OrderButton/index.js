import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class OrderButton extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    console.log('Order ', `${this.name}: ${this.restaurant}: ${this.dishes}`);
  }

  render() {
    return (
      <RaisedButton
        label="Order"
        primary
        onClick={this.handleOnClick}
      />
    );
  }
}

export default OrderButton;
