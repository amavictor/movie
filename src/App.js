import {Route, Routes} from "react-router-dom";
import {Home} from "./Routes/Home/Home";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchTrendingMoviesAsync} from "./store/Trending Movies/TrendingMovies.action";
import {NowPlaying} from "./Routes/No playing/NowPlaying";
import {Popular} from "./Routes/Popular/Popular";
import {TopRated} from "./Routes/Top rated/TopRated";
import {Upcoming} from "./Routes/upcoming/Upcoming";
import {MovieRoute} from "./Routes/Movie tab/Movie";
import {MainVideo} from "./Routes/Main Viceo Route/MainVideo";
import {
    fetchLatestAsync,
    fetchPopularAsync,
    fetchTopRatedAsync,
    fetchUpcomingAsync
} from "./store/Movies/Movies.action";


function App() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchTrendingMoviesAsync())
        dispatch(fetchUpcomingAsync())
        dispatch(fetchTopRatedAsync())
        dispatch(fetchPopularAsync())

    },[])
  return (
      <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/all-movies"} element={<MovieRoute/>}>
              <Route index element={<NowPlaying/>}/>
              <Route path={":movieName/watch"} element={<MainVideo/>}/>
              <Route path={"popular"} element={<Popular/>}>
                  <Route path={":movieName/watch"} element={<MainVideo/>}/>
              </Route>
              <Route path={"top-rated"} element={<TopRated/>}>
                  <Route path={":movieName/watch"} element={<MainVideo/>}/>
              </Route>
              <Route path={"upcoming"} element={<Upcoming/>}>
                  <Route path={":movieName/watch"} element={<MainVideo/>}/>
              </Route>
          </Route>

          <Route path={"/video"} element={<MainVideo/>}/>
      </Routes>
  );
}

export default App;
