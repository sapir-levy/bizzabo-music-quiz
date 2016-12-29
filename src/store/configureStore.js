import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

function configureStore(initialState) {
  const middlewares = [
    thunk
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
    });
  }

  return store;
}

export default configureStore;
