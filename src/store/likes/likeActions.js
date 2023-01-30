import { LIKE_TYPES } from "./likeTypes"

export const addLikedToLikesReducer = (movie) => {

    return{
        type:LIKE_TYPES.ADD_LIKES,
        payload:movie
    }
}
export const removeLikeFromRducer = (likedMovies, movie) => {
    return {
        type:LIKE_TYPES.ADD_LIKES,
        payload:likedMovies.filter((movies)=>movies!==movie)
    }
}
export const clearLikes = () => {
    return{
        type:LIKE_TYPES.ADD_LIKES,
    }
}