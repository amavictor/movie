import {USER_ACTION_TYPE} from "./user.type";

export const signUpWithEmailAndPassword = (user)=>{
    return{
        type:USER_ACTION_TYPE.SIGNUP_USER,
        payload:user
    }
}
export const signInWithEmailAndPassword = (user) => {
    return{
        type:USER_ACTION_TYPE.LOGIN_USER,
        payload:user
    }
}
export const signOut=()=>{
    return{
        type:USER_ACTION_TYPE.SIGNOUT_USER,
        payload:null,
    }
}

export const signInWithGoogle=(user)=>{
    return{
        type:USER_ACTION_TYPE.SIGNIN_WITH_GOOGLE,
        payload:user
    }
}