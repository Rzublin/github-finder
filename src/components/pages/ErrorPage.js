import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Fragment>
        <Helmet>
          <title>Github Finder | About</title>
          <meta
            name="description"
            content="Learn more about us and our Webapp"
          />
        </Helmet>
        <h1>OOPS!</h1>
        <p>
          The page you are looking for might not be available at this moment.
          Please try again later.
        </p>
        <Link to="/">GO TO HOMEPAGE </Link>
      </Fragment>
    </div>
  );
};

export default ErrorPage;
