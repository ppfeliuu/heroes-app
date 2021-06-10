import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { Login } from "../components/login/Login";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuth={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
