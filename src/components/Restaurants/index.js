import React, { Component } from 'react';
import { List } from 'material-ui/List';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: ['Bun Bo Hue', 'Com tam thuan kieu', 'Salad'], current: '' };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e, value) {
    this.setState({ current: value });
    console.log('You are choosing ', value);
  }

  render() {
    return (
      <List>
        <RadioButtonGroup name="restaurants" onChange={this.handleOnChange}>
          {this.state.restaurants.map(restaurant => (
            <RadioButton
              key={restaurant}
              value={restaurant}
              label={restaurant}
              style={{ marginBottom: '16px' }}
            />
          ))}
        </RadioButtonGroup>
      </List>
    );
  }
}

export default Restaurants;
