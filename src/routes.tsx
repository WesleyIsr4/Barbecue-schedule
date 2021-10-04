import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Home" component={Home} />
    </Switch>
  );
};

export default Routes;
