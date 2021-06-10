import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { Login } from "../components/login/Login";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/login" component={Login} />
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
