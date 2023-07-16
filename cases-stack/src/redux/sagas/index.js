import { takeEvery, put, call, all, fork } from "redux-saga/effects";
import { getAlbums, getPosts, getSinglePost } from "../api";
import { GET_POSTS, GET_SINGLE_POST } from "../constants";
import {
  setAlbums,
  setPosts,
  setPostsError,
  setAlbumsError,
  setSinglePost,
  setSinglePostError,
} from "../actions/actionCreator";

export function* getPostsWorker() {
  try {
    const data = yield call(getPosts);
    yield put(setPosts(data));
    yield put(setPostsError(""));
  } catch {
    yield put(setPostsError("Error fetching posts"));
  }
}

export function* getAlbumsWorker() {
  try {
    const data = yield call(getAlbums);
    yield put(setAlbums(data));
    yield put(setAlbumsError(""));
  } catch {
    yield put(setAlbumsError("Error fetching albums"));
  }
}

export function* getSinglePostWorker(action) {
  try {
    const data = yield call(getSinglePost, action.payload);
    yield put(setSinglePost(data));
    yield put(setSinglePostError(""));
  } catch (error) {
    if (error.message === "404") {
      yield put(setSinglePostError("Post is not found"));
    } else {
      yield put(setSinglePostError("Error fetching single post"));
    }
  }
}

export function* getAllPostsWorker() {
  yield all([call(getPostsWorker), call(getAlbumsWorker)]);
}

export function* getAllPostsWatcher() {
  yield takeEvery(GET_POSTS, getAllPostsWorker);
}

export function* getSinglePostWatcher() {
  yield takeEvery(GET_SINGLE_POST, getSinglePostWorker);
}

export default function* rootSaga() {
  yield all([fork(getAllPostsWatcher), fork(getSinglePostWatcher)]);
}
