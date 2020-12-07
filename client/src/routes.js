// import React from 'react'
// import Hoc from './components/Hoc';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import SignIn from './components/User/SignIn';
import SignUp from './components/User/Signup';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exec="true" component={Home} />
        <Route path="/signin" exec="true" component={SignIn} />
        <Route path="/signup" exec="true" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default Routes;
