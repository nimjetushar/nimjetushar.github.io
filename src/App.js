import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFound from "./component/not_found";
import Main from "./component/main";

class App extends Component {
  render() {
    return (
      <Main />
      // <Router>
      //   <Switch>
      //     <Route exact path="/" component={Main} />
      //     <Route exact path="*" component={NotFound} />
      //   </Switch>
      // </Router>
    );
  }
}

export default App;
