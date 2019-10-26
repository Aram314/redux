import { combineReducers } from "redux";
import posts from "./components/Posts/postsReducer";
import counter from "./components/Counter/countReducer";

export default combineReducers({
    posts,
    counter
});