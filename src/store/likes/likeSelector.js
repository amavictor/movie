import {createSelector} from "reselect";

const selectLikedMovies =(state)=>state.likes

export const selectLikedMoviesSelector = createSelector(
    [selectLikedMovies],
    (movieLikes) => movieLikes.likedItems
)