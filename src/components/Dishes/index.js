import React, { Component } from 'react';
import { List } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

class Dishes extends Component {
  constructor(props) {
    super(props);
    this.handleOnCheck = this.handleOnCheck.bind(this);
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
      <List>
        {this.props.current.dishes.map(dish => (
          <Checkbox
            key={dish}
            label={dish}
            checked={this.props.dishes.includes(dish)}
            onCheck={(e, checked) => this.handleOnCheck(dish, checked)}
          />
        ))}
      </List>
    );
  }
}

export default Dishes;
