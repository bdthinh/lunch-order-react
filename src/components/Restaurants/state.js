import mockData from '../mockData';

export const changeRestaurants = restaurants => ({
  type: 'CHANGE_RESTAURANTS',
  payload: restaurants,
});

export const chooseRestaurant = restaurantName => ({
  type: 'CHOOSE_RESTAURANT',
  payload: restaurantName,
});

export const restaurantsSelector = state => state.restaurants;

export const currentChosenRestaurantSelector = state => state.currentChosenRestaurant;

const restaurantsReducer = (state = mockData, { type, payload }) => {
  if (type === 'CHANGE_RESTAURANTS') {
    return payload;
  }
  return state;
};

const currentChosenRestaurantReducer = (state = '', { type, payload }) => {
  if (type === 'CHOOSE_RESTAURANT') {
    return payload;
  }
  return state;
};

export default {
  restaurants: restaurantsReducer,
  currentChosenRestaurant: currentChosenRestaurantReducer,
};
