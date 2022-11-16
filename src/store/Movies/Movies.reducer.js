import {ALL_MOVIES_TYPES} from "./Movies.type";

export const MOVIES_INITIAL_STATE ={
    nowPlaying:[],
    popular:[],
    topRated:[],
    upcomingMovies:[],

}

export const allMovieReducer =(state = MOVIES_INITIAL_STATE, action={})=>{
    const {type, payload} = action
    switch (type) {
        case ALL_MOVIES_TYPES.FETCH_NOW_PLAYING:
            return {
                ...state,
                nowPlaying: payload
            }
        case ALL_MOVIES_TYPES.FETCH_POPULAR:
            return {
                ...state,
                popular: payload
            }
        case ALL_MOVIES_TYPES.FETCH_TOP_RATED:
            return {
                ...state,
                topRated: payload
            }
        case ALL_MOVIES_TYPES.FETCH_UPCOMING_MOVIES:
            return {
                ...state,
                upcomingMovies: payload
            }
        default:
            return state
    }
}