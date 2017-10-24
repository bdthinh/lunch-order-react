import React, { Component } from 'react';

import Name from './components/Name';
import Restaurants from './components/Restaurants';
import Dishes from './components/Dishes';
import OrderButton from './components/OrderButton';

import mockData from './components/mockData';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', restaurants: [...mockData], current: '', chosenDishes: [] };
    this.handleOnChangeName = this.handleOnChangeName.bind(this);
    this.handleOnChangeRestaurant = this.handleOnChangeRestaurant.bind(this);
    this.handleOnCheckDishes = this.handleOnCheckDishes.bind(this);
  }

  handleOnChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleOnChangeRestaurant(e, value) {
    this.setState({ current: mockData.find(restaurant => restaurant.name === value) });
    console.log('You are choosing ', value);
  }

  handleOnCheckDishes(currentDish, checked) {
    let newDishes = [];
    if (checked) {
      newDishes = [...this.state.chosenDishes, currentDish];
    } else {
      newDishes = this.state.chosenDishes.filter(dish => dish !== currentDish);
    }
    this.setState({ chosenDishes: newDishes });
    console.log('Dishes', newDishes.join(', '));
  }

  render() {
    return (
      <div>
        <Name
          text={this.state.name}
          onChange={this.handleOnChangeName}
        />
        <Restaurants
          restaurants={this.state.restaurants}
          onChange={this.handleOnChangeRestaurant}
        />
        {this.state.current && <Dishes
          displayDishes={this.state.current.dishes}
          chosenDishes={this.state.chosenDishes}
          onCheck={this.handleOnCheckDishes}
        />}
        {
          this.state.chosenDishes.length > 0 &&
          <OrderButton name={this.state.name} dishes={this.state.chosenDishes} />
        }
      </div>
    );
  }
}

export default Layout;
