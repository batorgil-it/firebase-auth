import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import { AuthProvider } from "./components/auth";
import PrivateRoute from "./components/private_route";
import "./styles/style.css";

const Main = () => (
  <AuthProvider>
    <Router>
      <div>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  </AuthProvider>
);

export default Main;
