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
import Checkout from "./components/Checkout";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import PrivateRoute from "./privateRoute";
import AdminRoute from "./AdminRoute";
import Admin from "./components/Admin";

const Routes = ({ token, admin }) => {
  return (
    <Router>
      <Header />
      <Switch>
        <AdminRoute exact component={Admin} path="/admin" />
        <PrivateRoute exact component={Dashboard} path="/dashboard" />
        <PrivateRoute exact component={Profile} path="/user/profile" />
        <Route exact component={Home} path="/" />
        <Route exact component={Shop} path="/shop" />
        <Route
          exact
          render={() => (token ? <Redirect to="/dashboard" /> : <SignIn />)}
          path="/signin"
        />
        <Route exact component={SignUp} path="/signup" />
        <Route exact component={Hats} path="/shop/hats" />
        <Route exact component={Sneakers} path="/shop/sneakers" />
        <Route exact component={Jackets} path="/shop/jackets" />
        <Route exact component={Mens} path="/shop/mens" />
        <Route exact component={Womens} path="/shop/womens" />
        <Route exact component={Checkout} path="/checkout" />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  signedIn: state.auth.signedIn,
  token: state.auth.token,
  admin: state.auth.user,
});

export default connect(mapStateToProps, null)(Routes);
