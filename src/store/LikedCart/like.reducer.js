import {LIKE_ACTION_TYPE} from "./like.type";

const LIKE_STATE={
    likes:[],
}
export const likesReducer =(state = LIKE_STATE, action={})=>{
    const {type,payload} = action
    switch (type) {
        case LIKE_ACTION_TYPE.GET_LIKES:
            return{
                ...state,
                likes:payload
            }
        default:
            return state
    }
}