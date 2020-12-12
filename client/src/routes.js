import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Shop from "./components/Shop";
import Hats from "./components/Hats";
import Sneakers from "./components/Sneakers";
import Jackets from "./components/Jackets";
import Mens from "./components/Mens";
import Womens from "./components/Womens";

const Routes = ({ user, signedIn }) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Shop} path="/shop" />
        <Route
          exact
          path="/signin"
          render={() =>
            localStorage.getItem("token") ? <Redirect to="/" /> : <SignIn />
          }
        />
        <Route
          exact
          path="/signup"
          render={() =>
            localStorage.getItem("token") ? <Redirect to="/" /> : <SignUp />
          }
        />
        <Route exact component={Hats} path="/shop/hats" />
        <Route exact component={Sneakers} path="/shop/sneakers" />
        <Route exact component={Jackets} path="/shop/jackets" />
        <Route exact component={Mens} path="/shop/mens" />
        <Route exact component={Womens} path="/shop/womens" />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  signedIn: state.auth.signedIn,
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(Routes);
