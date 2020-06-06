import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";
import { Helmet } from "react-helmet";

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Github Finder | Home</title>
      <meta name="description" content="Search github users and their stats" />
    </Helmet>
    <Search />
    <Users />
  </Fragment>
);

export default Home;
