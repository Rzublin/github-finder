import * as githubTypes from "../types";

function githubReducer(state, action) {
  switch (action.type) {
    case githubTypes.SEARCH_USERS:
      return { ...state, users: action.payload };
    case githubTypes.GET_USER:
      return { ...state, user: action.payload };
    case githubTypes.CLEAR_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export default githubReducer;
