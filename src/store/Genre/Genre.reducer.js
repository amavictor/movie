import {HOME_MOVIE_TYPES} from "./AllMovies.type";

export const HOME_MOVIES_INITIAL_STATE ={
    movies:[],
    genre:[],
    isLoading: false,
    error: null
}

export const movieReducer =(state = HOME_MOVIES_INITIAL_STATE, action={})=>{
    const {type, payload} = action

    switch (type) {
        case HOME_MOVIE_TYPES.FETCH_MOVIES_START:
            return {
                ...state,
                isLoading: true
            };
        case HOME_MOVIE_TYPES.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movies: payload
            }
        case HOME_MOVIE_TYPES.FETCH_MOVIES_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        default:
            return state
    }
}