import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import SplashScreen from '../components/SplashScreen'
import HomePage from '../components/HomePage';
import store from '../components/store/store'
import Survey from '../components/survey/survey'
import Header from '../components/Header'
import { TransitionGroup, CSSTransition  } from 'react-transition-group'

export const history = createHistory();

const AppRouter = () => (

  <Router history={history}>
    <Route render={({ location }) => (
      <div>
        {location.pathname!='/' && <Header />}
        <TransitionGroup className="transitionGroup">
            <CSSTransition
            key={location.key}
            timeout={500}
            classNames='fade'
            >
            <div className="animationContainer">
              <Switch location={location}>
                <Route path="/" component={SplashScreen} exact={true} />
                <Route path="/home" component={HomePage} exact={true} />
                <Route path="/store" component={store} exact={true} />
                <Route path="/survey" component={Survey} exact={false} />
              </Switch>
            </div>
            </CSSTransition>
        </TransitionGroup>
      </div>
    )}/>
  </Router>
);


export default AppRouter;
