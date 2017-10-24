import React from 'react';
import { List } from 'material-ui/List';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const Restaurants = ({ restaurants, onChange }) => (
  <List>
    <RadioButtonGroup name="restaurants" onChange={onChange}>
      {restaurants.map(restaurant => (
        <RadioButton
          key={restaurant.name}
          value={restaurant.name}
          label={restaurant.name}
          style={{ marginBottom: '16px' }}
        />
      ))}
    </RadioButtonGroup>
  </List>
);

export default Restaurants;
