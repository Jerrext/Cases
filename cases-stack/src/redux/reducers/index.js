import { combineReducers } from "redux";
import counter from "./counter";
import allPosts from "./posts";
import errors from "./errors";

const reducer = combineReducers({ counter, allPosts, errors });

export default reducer;
