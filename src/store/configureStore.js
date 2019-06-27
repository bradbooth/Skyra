import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import surveyReducer from '../reducers/survey'
import shopifyReducer from '../reducers/shopify'
import cartReducer from '../reducers/cart'
import variantReducer from '../reducers/variant'

import {reducer as burgerMenu} from 'redux-burger-menu';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      survey: surveyReducer,
      shopify: shopifyReducer,
      cart: cartReducer,
      variant: variantReducer,
      burgerMenu
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
