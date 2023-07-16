import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  GET_POSTS,
  SET_POSTS,
  SET_ALBUMS,
  SET_POSTS_ERROR,
  SET_ALBUMS_ERROR,
  GET_SINGLE_POST,
  SET_SINGLE_POST,
  SET_SINGLE_POST_ERROR,
} from "../constants";

export const increaseCount = () => ({
  type: INCREASE_COUNT,
});

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});

export const getPosts = () => ({
  type: GET_POSTS,
});

export const getSinglePost = (payload) => ({
  type: GET_SINGLE_POST,
  payload,
});

export const setSinglePost = (payload) => ({
  type: SET_SINGLE_POST,
  payload,
});

export const setSinglePostError = (payload) => ({
  type: SET_SINGLE_POST_ERROR,
  payload,
});

export const setPosts = (payload) => ({
  type: SET_POSTS,
  payload,
});

export const setAlbums = (payload) => ({
  type: SET_ALBUMS,
  payload,
});

export const setPostsError = (payload) => ({
  type: SET_POSTS_ERROR,
  payload,
});

export const setAlbumsError = (payload) => ({
  type: SET_ALBUMS_ERROR,
  payload,
});
