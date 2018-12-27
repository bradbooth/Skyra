import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition  } from 'react-transition-group'
import createHistory from 'history/createBrowserHistory';
import SplashScreen from '../components/SplashScreen'
import HomePage from '../components/HomePage';
import Product from '../components/product/Product';
import Header from '../components/Header'
import Survey from '../components/survey/Survey'
import ShoppingCart from '../components/cart/ShoppingCart'
import { startStoreProducts, startCreateCheckout } from '../actions/shopify';

export const history = createHistory();

export class AppRouter extends React.Component {

  componentWillMount() {

    //Products
    this.props.client.product.fetchAll().then((res) => {
      this.props.storeProducts(res)
    });

    //Checkout
    this.props.client.checkout.create().then((res) => {
      this.props.createCheckout(res)
    });
  }
  
  // Render the router which allows the pages to change in page while url changes
  render() {
    return (
      <Router history={history}>
        <Route render={({ location }) => (
          <div id="hello">
            {location.pathname !='/' && <Header />}
            <ShoppingCart right />
              <TransitionGroup className="transitionGroup">
                  <CSSTransition
                  key={location.key}
                  timeout={250}
                  classNames='fade'
                  >
                  <div className="animationContainer">
                    <Switch location={location}>
                      <Route path="/" component={SplashScreen} exact={true} />
                      <Route path="/home" component={HomePage} exact={true} />
                      <Route path="/product" component={Product} exact={true} />
                      <Route path="/survey" component={Survey} exact={true} />
                    </Switch>
                  </div>
                  </CSSTransition>
              </TransitionGroup>
          </div>
        )}/>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    client: state.shopify.client
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeProducts: (products) => dispatch(startStoreProducts(products)),
  createCheckout: (checkout) => dispatch(startCreateCheckout(checkout))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
