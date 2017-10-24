import { createStore } from 'redux';
import rootReducer from './rootReducer';

export default () => {
  const store = createStore(
    rootReducer,
    undefined,
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      // eslint-disable-next-line global-require
      const nextReducer = require('./rootReducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
