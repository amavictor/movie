import {createSelector} from "reselect";

const selectMovieReducer =(state)=>state.trendingMovies

export const selectTrendingMovies = createSelector(
    [selectMovieReducer],
    (movieSlice)=>movieSlice.trendingMovies
)
export const selectTrendingMoviesDay = createSelector(
    [selectMovieReducer],
    (movieSlice)=>movieSlice.trendingMoviesDay
)
