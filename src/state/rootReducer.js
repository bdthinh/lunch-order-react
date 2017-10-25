// import { always } from 'lodash/fp';
import { combineReducers } from 'redux';

import nameReducer from '../components/Name/state';

import allRestaurantsReducers from '../components/Restaurants/state';

export default combineReducers({
  name: nameReducer,
  ...allRestaurantsReducers,
});
