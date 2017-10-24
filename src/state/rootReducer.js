// import { always } from 'lodash/fp';
import { combineReducers } from 'redux';

import nameReducer from '../components/Name/state';

export default combineReducers({
  name: nameReducer,
});
