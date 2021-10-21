import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.scss";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./components/not-found/NotFound";
import PrivateRoute from "./components/common/PrivateRoute";
import SignIn from "./components/sign-in/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="app-body">
          <Switch>
            <Route exact path="/signIn" component={SignIn} />
            <PrivateRoute exact path="/" component={Main} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
