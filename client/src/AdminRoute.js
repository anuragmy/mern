import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AdminRoute = ({ component: Component, signedIn, user, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        signedIn && user.roles && user.roles === 1 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

const mapStateToProps = ({ auth: { token, user } }) => ({
  signedIn: token,
  user,
});

export default connect(mapStateToProps)(AdminRoute);
