import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const User = ({ user, getUser, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    name,
    email,
    html_url,
    avatar_url,
    location,
    bio,
    blog,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;
  return (
    <div className="text-center">
      <Helmet>
        <title>Github Finder | User Profile</title>
        <meta
          name="description"
          content={`All the information about the user ${name} on Github`}
        />
      </Helmet>
      <img
        src={avatar_url}
        alt={name}
        className="round-img"
        style={{ maxWidth: "200px" }}
      />
      <h1>{name}</h1>
      {email && <p>Contact: {email}</p>}
      <p>
        Github Page:{" "}
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {html_url}
        </a>
      </p>
      {location && <p>Located at {location}</p>}
      {bio && <p>Bio: {bio}</p>}
      {blog && (
        <p>
          Blog:{" "}
          <a href={blog} target="_blank" rel="noopener noreferrer">
            {blog}
          </a>
        </p>
      )}
      <div className="text-center my-1">
        <div className="badge badge-primary">followers: {followers}</div>
        <div className="badge badge-success">following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-danger">Public Gists: {public_gists}</div>
      </div>
      <Link to="/" className="btn btn-dark btn-sm my-1">
        Back
      </Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
};

export default User;
