import React, { Component } from 'react';
import { List } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import mockData from '../mockData';
import OrderButton from '../OrderButton';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = { ...mockData, current: '', dishes: [] };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e, value) {
    this.setState({ current: mockData.restaurants.find(restaurant => restaurant.name === value) });
    console.log('You are choosing ', value);
  }

  handleOnCheck(e) {
    console.log('Add dish', e.target.value);
    this.setState({ dishes: [...this.state.dishes, e.target.value] });
  }

  render() {
    return (
      <div>
        <List>
          <RadioButtonGroup name="restaurants" onChange={this.handleOnChange}>
            {this.state.restaurants.map(restaurant => (
              <RadioButton
                key={restaurant.name}
                value={restaurant.name}
                label={restaurant.name}
                style={{ marginBottom: '16px' }}
              />
            ))}
          </RadioButtonGroup>
        </List>
        {this.state.current && <List>
          {this.state.current.dishes.map(dish => (
            <Checkbox
              key={dish}
              label={dish}
              onCheck={this.handleOnCheck}
            />
          ))}
        </List>}
        <OrderButton name={this.props} restaurant={this.state.current} dishes={this.state.dishes} />
      </div>
    );
  }
}

export default Restaurants;
