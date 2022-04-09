import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

const Routes = ({ token, admin }) => {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route exact component={Checkout} path="/checkout" /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
