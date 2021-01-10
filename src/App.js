/**
 * Main entry point of your project and handles routing
 */

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import AboutMe from "../src/Pages/AboutMe/AboutMe.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/aboutme"></Redirect>
          </Route>
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/aboutme" component={AboutMe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
