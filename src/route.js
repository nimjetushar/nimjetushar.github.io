import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  </Router>
);

module.exports = Routes;
