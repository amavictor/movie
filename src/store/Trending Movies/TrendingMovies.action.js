
import {TRENDING_MOVIES_BY_DAY_URL, TRENDING_MOVIES_BY_WEEK_URL} from "../../utils";
import axios from "axios";
import {MOVIE_TYPES} from "./TrendingMovies.type";

export const fetchMoviesStart =()=>{
    return{
        type:MOVIE_TYPES.FETCH_TRENDING_MOVIES_START
    }
}
export const fetchMoviesSuccess =(trendingMovies,trendingMoviesDay)=>{
    return{
        type:MOVIE_TYPES.FETCH_TRENDING_MOVIES_SUCCESS,
        payload:{trendingMovies,trendingMoviesDay}
    }
}
export const fetchMoviesFailed =(error)=>{
    return{
        type:MOVIE_TYPES.FETCH_TRENDING_MOVIES_FAILED,
        payload:error
    }
}

export const fetchTrendingMoviesAsync=()=>(dispatch)=>{
    const trendingWeekRequest = axios.get(`${TRENDING_MOVIES_BY_WEEK_URL}`)
    const trendingDayRequest = axios.get(`${TRENDING_MOVIES_BY_DAY_URL}`)
    dispatch(fetchMoviesStart())
    axios.all   ([trendingWeekRequest,trendingDayRequest])
        .then(axios.spread((...response)=>{
            const trendingWeekResponse = response[0]
            const trendingDayResponse = response[1]
            dispatch(fetchMoviesSuccess(trendingWeekResponse.data.results,trendingDayResponse.data.results))
        }))
        .catch(e=>{
            dispatch(fetchMoviesFailed(e))
        })
}