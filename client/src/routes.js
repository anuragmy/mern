import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Shop} path="/shop" />
      </Switch>
    </Router>
  );
};

export default Routes;
