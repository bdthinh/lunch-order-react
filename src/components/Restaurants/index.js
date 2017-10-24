import React, { Component } from 'react';
import { List } from 'material-ui/List';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

class Restaurants extends Component {
  render() {
    return (
      <div>
        <List>
          <RadioButtonGroup name="restaurants" onChange={this.props.onChange}>
            {this.props.restaurants.map(restaurant => (
              <RadioButton
                key={restaurant.name}
                value={restaurant.name}
                label={restaurant.name}
                style={{ marginBottom: '16px' }}
              />
            ))}
          </RadioButtonGroup>
        </List>
      </div>
    );
  }
}

export default Restaurants;
