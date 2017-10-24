import React from 'react';
import { List } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const Dishes = ({ displayDishes, chosenDishes, onCheck }) => (
  <List>
    {displayDishes.map(dish => (
      <Checkbox
        key={dish}
        label={dish}
        checked={chosenDishes.includes(dish)}
        onCheck={(e, checked) => onCheck(dish, checked)}
      />
    ))}
  </List>
);

export default Dishes;
