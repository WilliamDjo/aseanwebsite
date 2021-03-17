import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Home from "views/Home/Home.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

import About from "views/CulturalImmersion/About";
import Schedule from "views/CulturalImmersion/Schedule";
import Speakers from "views/CulturalImmersion/Speakers";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/about" component={LoginPage} />
      <Route path="/culturalimmersion/speakers" component={Speakers} />
      <Route path="/culturalimmersion/about" component={About} />
      <Route path="/culturalimmersion/schedule" component={Schedule} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
