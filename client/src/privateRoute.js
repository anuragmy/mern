import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const privateRoute = ({ component: Component, signedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        signedIn ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

const mapStateToProps = ({ auth: { token } }) => ({ signedIn: token });

export default connect(mapStateToProps)(privateRoute);
