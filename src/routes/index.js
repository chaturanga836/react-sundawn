import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Home,About} from "../Pages/index";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default Routes;
