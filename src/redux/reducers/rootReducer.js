import { combineReducers } from "redux";
import countriesReducer from "./countries/countries.reducer";
import postsReducer from "./posts/posts.reducer";
import universitiesReducer from "./universities/universities.reducer";
import zipcodesReducer from "./zipcodes/zipcodes.reducer";

const rootReducer = () => {
    return combineReducers({
        posts: postsReducer,
        countries: countriesReducer,
        universities: universitiesReducer,
        zipcodes: zipcodesReducer
    });
};

export default rootReducer;