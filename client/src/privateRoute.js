import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const privateRoute = ({ component: Component, signedIn, admin, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        signedIn && admin.roles === 0 ? (
          <Component {...props} />
        ) : signedIn && admin.roles === 1 ? (
          <Redirect to="/admin" />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

const mapStateToProps = ({ auth: { token, user } }) => ({
  signedIn: token,
  admin: user,
});

export default connect(mapStateToProps)(privateRoute);
