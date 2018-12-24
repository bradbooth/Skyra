import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import surveyReducer from '../reducers/survey'
import shopifyReducer from '../reducers/shopify'
import cartReducer from '../reducers/cart'

import {reducer as burgerMenu} from 'redux-burger-menu';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      survey: surveyReducer,
      shopify: shopifyReducer,
      cart: cartReducer,
      burgerMenu
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
