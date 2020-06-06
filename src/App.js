import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ErrorPage from "./components/pages/ErrorPage";
import User from "./components/users/User";
import "./App.css";
import GithubState from "./context/github/GithubState";

const App = () => {
  return (
    <GithubState>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
