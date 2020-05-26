import React from "react";
import PropTypes from "prop-types";

const User = (props) => {
  const { getUser, user, loading } = props;
  return (
    <div>
      <h1>{user.login}</h1>
      <h1>User</h1>
    </div>
  );
};

User.propTypes = {};

export default User;
