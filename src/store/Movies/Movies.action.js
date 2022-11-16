
import axios from "axios";
import {ALL_MOVIES_TYPES} from "./Movies.type";
import {BASE_URL} from "../../utils";
import {useContext} from "react";
import {PageContext} from "../../context/Category.context";


export const fetchNowPlaying =(movie)=>{
    return{
        type:ALL_MOVIES_TYPES.FETCH_NOW_PLAYING,
        payload:movie
    }
}
export const fetchPopular =(movie)=>{
    return{
        type:ALL_MOVIES_TYPES.FETCH_POPULAR,
        payload:movie
    }
}
export const fetchTopRated =(movie)=>{
    return{
        type:ALL_MOVIES_TYPES.FETCH_TOP_RATED,
        payload:movie
    }
}
export const fetchUpComing =(movie)=>{
    return{
        type:ALL_MOVIES_TYPES.FETCH_UPCOMING_MOVIES,
        payload:movie
    }
}

export const fetchNowPlayingAsync=()=>(dispatch)=>{
    axios.get(`${BASE_URL}movie/now_playing?api_key=672e218cbb77d06c47ae1e2d04209fb4&language=en-US&page=1`)
        .then((response)=> dispatch(fetchNowPlaying(response.data.results)))
        .catch(e=>window.alert(e))
}
