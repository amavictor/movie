import {MOVIE_TYPES, TRENDING_MOVIE_TYPES} from "./TrendingMovies.type";

export const HOME_MOVIES_INITIAL_STATE ={
    trendingMovies:[],
    trendingMoviesDay:[],
    allMovies:[],
    isLoading: false,
    error: null
}

export const movieReducer =(state = HOME_MOVIES_INITIAL_STATE, action={})=>{
    const {type, payload} = action

    switch (type) {
        case MOVIE_TYPES.FETCH_TRENDING_MOVIES_START:
            return {
                ...state,
                isLoading: true
            };
        case MOVIE_TYPES.FETCH_TRENDING_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                trendingMovies: payload.trendingMovies,
                trendingMoviesDay: payload.trendingMoviesDay
            }
        case MOVIE_TYPES.FETCH_TRENDING_MOVIES_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            }

        default:
            return state
    }
}