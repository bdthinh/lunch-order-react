import React from 'react';
import { connect } from 'react-redux';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import compose from 'recompose/compose';

import Name from './components/Name';
import Restaurants from './components/Restaurants';
import {
  chooseRestaurant,
  restaurantsSelector,
  currentChosenRestaurantSelector,
} from './components/Restaurants/state';
import Dishes from './components/Dishes';
import OrderButton from './components/OrderButton';

const connectRestaurantWithRedux = connect(
  state => ({
    restaurants: restaurantsSelector(state),
    current: currentChosenRestaurantSelector(state),
  }),
  null,
  ({ restaurants, ...otherStateProps }, { dispatch }, ownProps) => ({
    ...ownProps,
    ...otherStateProps,
    restaurants,
    handleOnChangeRestaurant: (e, value) => dispatch(chooseRestaurant(
      restaurants.find(restaurant => restaurant.name === value),
    )),
  }),
);

const enhance = compose(
  connectRestaurantWithRedux,
  withState('chosenDishes', 'chooseDishes', []),
  withHandlers({
    handleOnCheckDishes: ({ chooseDishes, chosenDishes }) => (currentDish, checked) => {
      let newDishes = [];
      if (checked) {
        newDishes = [...chosenDishes, currentDish];
      } else {
        newDishes = chosenDishes.filter(dish => dish !== currentDish);
      }
      chooseDishes(newDishes);
      console.log('Dishes', newDishes.join(', '));
    },
  }),
);

const Layout = ({
  restaurants,
  current,
  chosenDishes,
  handleOnChangeRestaurant,
  handleOnCheckDishes,
}) => (
  <div>
    <Name />
    <Restaurants
      restaurants={restaurants}
      onChange={handleOnChangeRestaurant}
    />
    {current && <Dishes
      displayDishes={current.dishes}
      chosenDishes={chosenDishes}
      onCheck={handleOnCheckDishes}
    />}
    {
      chosenDishes.length > 0 &&
      <OrderButton dishes={chosenDishes} />
    }
  </div>
);

export default enhance(Layout);
