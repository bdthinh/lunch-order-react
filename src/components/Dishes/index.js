import React, { Component } from 'react';
import { List } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

class Dishes extends Component {
  render() {
    return (
      <List>
        {this.props.displayDishes.map(dish => (
          <Checkbox
            key={dish}
            label={dish}
            checked={this.props.chosenDishes.includes(dish)}
            onCheck={(e, checked) => this.props.onCheck(dish, checked)}
          />
        ))}
      </List>
    );
  }
}

export default Dishes;
