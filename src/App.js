import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import ErrorPage from "./components/pages/ErrorPage";
import User from "./components/users/User";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUsers(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const searchUsers = async (text) => {
    if (text) {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUsers(res.data.items);
      setLoading(false);
    } else {
      alert("Please enter a user name");
    }
  };
  const getUser = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
  };

  const clearUsers = () => setUsers([]);

  return (
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
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                  />
                  <Users users={users} loading={loading} />
                </Fragment>
              )}
            ></Route>
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  user={user}
                  loading={loading}
                />
              )}
            />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
