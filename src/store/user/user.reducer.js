import {USER_ACTION_TYPE} from "./user.type";

export const USER_STATE={
    user:null,
}
export const userReducer =(state = USER_STATE, action={})=>{
    const {type,payload} = action
    switch (type) {
        case USER_ACTION_TYPE.SIGNUP_USER:
            return{
                ...state,
                user:payload
            }
        case USER_ACTION_TYPE.SIGNOUT_USER:
            return {
                ...state,
                user:payload
            }
        case USER_ACTION_TYPE.LOGIN_USER:
            return {
                ...state,
                user:payload
            }
        case USER_ACTION_TYPE.SIGNIN_WITH_GOOGLE:
            return {
                ...state,
                user:payload
            }
        default:
            return state
    }
}