import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Bundle from './components/bundle';

const Home = (props) => (
  <Bundle load={() => import('./pages/home')}>
      {(Home) => <Home {...props}/>}
  </Bundle>
);

export const app = () => (

  <Router>
    <Switch>
      <Route exact path="/home" component={Home} ></Route>

      <Redirect to='home'/>
    </Switch>
  </Router>

)
