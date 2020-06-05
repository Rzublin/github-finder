import React, { useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users } = githubContext;
  return (
    <div className="grid-3">
      {users.length > 0 &&
        users.map((user) => <UserItem user={user} key={user.id} />)}
    </div>
  );
};

export default Users;
