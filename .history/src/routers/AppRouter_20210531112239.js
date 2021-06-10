import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
      
        <Switch>
          <Route exact path="/login" component={}>
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
};
