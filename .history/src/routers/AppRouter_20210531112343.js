import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "../components/login/Login";
import { Marvel } from "../components/marvel/Marvel";
import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/login" component={Login} />

          <Route exact path="/" component={Marvel} />
        </Switch>
      </div>
    </Router>
  );
};
