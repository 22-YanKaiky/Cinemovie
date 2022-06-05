import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  )
}
