import {createSelector} from "reselect";

const selectMovieReducer =(state)=>state.allMovies

export const selectNowPlayingMovies = createSelector(
    [selectMovieReducer],
    (movieSlice)=>movieSlice.nowPlaying
)
export const selectPopularMovies = createSelector(
    [selectMovieReducer],
    (movieSlice)=>movieSlice.popular
)
export const selectTopRatedMovies = createSelector(
    [selectMovieReducer],
    (movieSlice)=>movieSlice.topRated
)
export const selectUpcomingMovies = createSelector(
    [selectMovieReducer],
    (movieSlice)=>movieSlice.upcomingMovies
)
export const selectLatestMovies = createSelector(
    [selectMovieReducer],
    (movieSlice)=>movieSlice.latest
)