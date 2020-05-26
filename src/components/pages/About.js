import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const About = () => {
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
        <h1>About</h1>
        <p>App to search Github users</p>
        <p>Version 1.0.0</p>
      </Fragment>
    </div>
  );
};

export default About;
