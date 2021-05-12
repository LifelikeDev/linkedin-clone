import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Component exports
import Login from "./Components/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
