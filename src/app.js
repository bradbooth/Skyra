import React from "react";
import ReactDOM from "react-dom";
import Client from 'shopify-buy';
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons' //TODO - Import only those neccessary, not everything lol

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";

//Redux store
const store = configureStore();

//Shopify
const shopify_client = Client.buildClient({
  storefrontAccessToken: '1f09301939a6b83143e62a750fa3e7b8',
  domain: 'teststore1q1qe1.myshopify.com'
});
store.dispatch({type: 'SHOPIFY_STORE_CREATED', payload: shopify_client});

// FontAwesome
library.add(fas)


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
