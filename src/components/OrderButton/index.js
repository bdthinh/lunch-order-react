import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class OrderButton extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    console.log('Order ', `${this.props.name}: ${this.props.dishes}`);
  }

  render() {
    return (
      <RaisedButton
        label="Order"
        primary
        onTouchTap={this.handleOnClick}
      />
    );
  }
}

export default OrderButton;
