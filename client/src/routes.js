import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Shop from "./components/Shop";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Shop} path="/shop" />
        <Route exact component={SignIn} path="/signin" />
        <Route exact component={SignUp} path="/signup" />
      </Switch>
    </Router>
  );
};

export default Routes;
