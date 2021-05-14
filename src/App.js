import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";

// Component exports
import Login from "./Components/Login";

const App = () => {
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

export default App;
