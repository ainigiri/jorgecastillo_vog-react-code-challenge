import { combineReducers } from "redux";
import postsReducer from "./posts/posts.reducer";

const rootReducer = () => {
    return combineReducers({
        posts: postsReducer,
    });
};

export default rootReducer;