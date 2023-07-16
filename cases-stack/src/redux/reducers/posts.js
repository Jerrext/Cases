import { SET_ALBUMS, SET_POSTS, SET_SINGLE_POST } from "../constants";

const initialState = {
  posts: [],
  albums: [],
  post: [],
};

const allPosts = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS:
      return { ...state, posts: [...state.posts, ...payload] };
    case SET_ALBUMS:
      return { ...state, albums: [...state.albums, ...payload] };
    case SET_SINGLE_POST:
      return { ...state, post: [...state.post, payload] };
    default:
      return state;
  }
};

export default allPosts;
