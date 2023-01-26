import {LIKE_ACTION_TYPE} from "./like.type";

export const getLikes = (movie)=>{
    return{
        type:LIKE_ACTION_TYPE.GET_LIKES,
        payload:movie
    }
}
