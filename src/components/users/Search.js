import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = ({ showClear }) => {
  const [text, setText] = useState("");
  const { searchUsers, clearUsers, users } = useContext(GithubContext);

  const onSubmit = (e) => {
    e.preventDefault();
    searchUsers(text);
    setText("");
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>

      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
