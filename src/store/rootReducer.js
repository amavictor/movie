import {combineReducers} from "redux";
import {movieReducer} from "./Trending Movies/TrendingMovies.reducer";
import {allMovieReducer} from "./Movies/Movies.reducer";
import {userReducer} from "./user/user.reducer";

export const rootReducer = combineReducers({
    trendingMovies:movieReducer,
    allMovies:allMovieReducer,
    user:userReducer
})