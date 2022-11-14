export const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
export const TRENDING_MOVIES_BY_DAY_URL =`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
export const TRENDING_MOVIES_BY_WEEK_URL=`https://api.themoviedb.org/3/trending/movie/week?api_key=672e218cbb77d06c47ae1e2d04209fb4`
export const TRENDING_TV_BY_DAY_URL=`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}`
export const TRENDING_TV_BY_WEEK_URL=`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`

//Image url
export const IMG_BASE_URL = `https://image.tmdb.org/t/p/w500/`

//Search url
export const SEARCH_MOVIE_URL=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query&page=1&include_adult=false`