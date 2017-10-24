import React from 'react';
import { connect } from 'react-redux';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import compose from 'recompose/compose';

import Name from './components/Name';
import { nameSelector, setName } from './components/Name/state';
import Restaurants from './components/Restaurants';
import Dishes from './components/Dishes';
import OrderButton from './components/OrderButton';

import mockData from './components/mockData';

const connectNameWithRedux = connect(
  state => ({
    name: nameSelector(state),
  }),
  dispatch => ({
    onChangeName: e => dispatch(setName(e.target.value)),
  }),
);

const enhance = compose(
  connectNameWithRedux,
  withState('restaurants', 'initRestaurants', [...mockData]),
  withState('current', 'setRestaurant', ''),
  withState('chosenDishes', 'chooseDishes', []),
  withHandlers({
    handleOnChangeRestaurant: ({ setRestaurant }) => (e, value) => {
      setRestaurant(mockData.find(restaurant => restaurant.name === value));
      console.log('You are choosing ', value);
    },
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
  name,
  restaurants,
  current,
  chosenDishes,
  onChangeName,
  handleOnChangeRestaurant,
  handleOnCheckDishes,
}) => (
  <div>
    <Name
      text={name}
      onChange={onChangeName}
    />
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
      <OrderButton name={name} dishes={chosenDishes} />
    }
  </div>
);

export default enhance(Layout);
