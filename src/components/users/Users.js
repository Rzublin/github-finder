import React from "react";
import UserItem from "./UserItem";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  return (
    <div style={userStyle}>
      {users && users.map((user) => <UserItem user={user} key={user.id} />)}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
