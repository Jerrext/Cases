import { SET_ALBUMS_ERROR, SET_POSTS_ERROR, SET_SINGLE_POST_ERROR } from "../constants";

const initialState = {
  postsError: "",
  albumsError: "",
  postError: "",
};

const errors = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS_ERROR:
      return { ...state, postsError: payload };
    case SET_ALBUMS_ERROR:
      return { ...state, albumsError: payload };
    case SET_SINGLE_POST_ERROR:
      return { ...state, postError: payload };
    default:
      return state;
  }
};

export default errors;
