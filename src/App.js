import {Route, Routes} from "react-router-dom";
import {Home} from "./Routes/Home/Home";
import {useDispatch} from "react-redux";
import {useContext, useEffect} from "react";
import {fetchTrendingMoviesAsync} from "./store/Trending Movies/TrendingMovies.action";
import {NowPlaying} from "./Routes/No playing/NowPlaying";
import {Popular} from "./Routes/Popular/Popular";
import {TopRated} from "./Routes/Top rated/TopRated";
import {Upcoming} from "./Routes/upcoming/Upcoming";
import {MovieRoute} from "./Routes/Movie tab/Movie";
import {MainVideo} from "./Routes/Main Viceo Route/MainVideo";
import {PageContext} from "./context/Category.context";


function App() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchTrendingMoviesAsync())

    },[])
  return (
      <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/all-movies"} element={<MovieRoute/>}>
              <Route index element={<NowPlaying/>}/>
              <Route path={":movieName/watch"} element={<MainVideo/>}/>
              <Route path={"popular"} element={<Popular/>}/>
              <Route path={"top-rated"} element={<TopRated/>}/>
              <Route path={"upcoming"} element={<Upcoming/>}/>
          </Route>
          <Route path={"/video"} element={<MainVideo/>}/>
      </Routes>
  );
}

export default App;
