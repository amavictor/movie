import {createSelector} from "reselect";

const selectLikeReducer=(state)=>state.likeReducer
export const selectLike = createSelector(
    [selectLikeReducer],
    (likeSlice)=>likeSlice.likes
)