import React, { Component } from 'react';
import { List } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import mockData from '../mockData';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = { ...mockData, current: '', dishes: [] };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnCheck = this.handleOnCheck.bind(this);
  }

  handleOnChange(e, value) {
    this.setState({ current: mockData.restaurants.find(restaurant => restaurant.name === value) });
    console.log('You are choosing ', value);
  }

  handleOnCheck(currentDish, checked) {
    let newDishes = [];
    if (checked) {
      newDishes = [...this.state.dishes, currentDish];
    } else {
      newDishes = this.state.dishes.filter(dish => dish !== currentDish);
    }
    this.setState({ dishes: newDishes });
    console.log('Dishes', newDishes.join(', '));
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
              checked={this.state.dishes.includes(dish)}
              onCheck={(e, checked) => this.handleOnCheck(dish, checked)}
            />
          ))}
        </List>}
      </div>
    );
  }
}

export default Restaurants;
