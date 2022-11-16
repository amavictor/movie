import {HOME_MOVIE_TYPES} from "../Trending Movies/TrendingMovies.type";
import axios from "axios";
import {TRENDING_MOVIES_BY_WEEK_URL} from "../../utils";

export const fetchMoviesStart =()=>{
    return{
        type:HOME_MOVIE_TYPES.FETCH_MOVIES_START
    }
}
export const fetchSuccess =(movies)=>{
    return{
        type:HOME_MOVIE_TYPES.FETCH_MOVIES_SUCCESS,
        payload:movies
    }
}
export const fetchFailed =(error)=>{
    return{
        type:HOME_MOVIE_TYPES.FETCH_MOVIES_FAILED,
        payload:error
    }
}

export const fetchMoviesAsync=()=>(dispatch)=>{
    dispatch(fetchMoviesStart())
    axios.get(`${TRENDING_MOVIES_BY_WEEK_URL}`)
        .then((response)=>{
            dispatch(fetchSuccess(response.data.results))
        })
        .catch(e=>{
            dispatch(fetchFailed())
            console.log(e)
        })
}