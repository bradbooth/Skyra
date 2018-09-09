import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import SplashScreen from '../components/SplashScreen'
import HomePage from '../components/HomePage';
import Survey from '../components/Survey'
import Header from '../components/Header'

export const history = createHistory();

const AppRouter = () => (

  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={SplashScreen} exact={true} />
        <Route path="/home" component={HomePage} exact={true} />
        <Route path="/survey" component={Survey} exact={false} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
