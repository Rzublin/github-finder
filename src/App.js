import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import ErrorPage from "./components/pages/ErrorPage";
import User from "./components/users/User";
import { Helmet } from "react-helmet";
import "./App.css";
import GithubState from "./context/github/GithubState";

const App = () => {
  return (
    <GithubState>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Helmet>
            <title>Github Finder | Home</title>
          </Helmet>
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              ></Route>
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => <User {...props} />}
              />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
