import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.token ? <Component {...props} /> : <Redirect to="/signIn" />
    }
  />
);

export default PrivateRoute;
