import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Shop from "./components/Shop";
import Hats from "./components/Hats";
import Sneakers from "./components/Sneakers";
import Jackets from "./components/Jackets";

const Routes = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Shop} path="/shop" />
        <Route exact component={SignIn} path="/signin" />
        <Route exact component={SignUp} path="/signup" />
        <Route exact component={Hats} path="/shop/hats" />
        <Route exact component={Sneakers} path="/shop/sneakers" />
        <Route exact component={Jackets} path="/shop/jackets" />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  signedIn: state.auth.signedIn,
});

export default connect(mapStateToProps, null)(Routes);
