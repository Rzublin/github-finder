import React from "react";
import UserItem from "./UserItem";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  return (
    <div className="grid-3">
      {users && users.map((user) => <UserItem user={user} key={user.id} />)}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
