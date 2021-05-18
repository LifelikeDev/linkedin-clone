import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getAuthDetails } from "./actions/actions";
import Header from "./Components/Header";
import Home from "./Components/Home";

// Component exports
import Login from "./Components/Login";

const App = ({ getUserAuthentication }) => {
  useEffect(() => {
    getUserAuthentication();
  }, [getUserAuthentication]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuthentication: () => dispatch(getAuthDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
