import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

export const app = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} ></Route>
      <Route exact path="/home" component={Home} ></Route>
      <Redirect to='home'/>
    </Switch>
  </Router>
);
