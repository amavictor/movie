import {Route, Routes} from "react-router-dom";
import {Home} from "./Routes/Home/Home";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useLayoutEffect} from "react";
import {fetchTrendingMoviesAsync} from "./store/Trending Movies/TrendingMovies.action";
import {NowPlaying} from "./Routes/No playing/NowPlaying";
import {Popular} from "./Routes/Popular/Popular";
import {TopRated} from "./Routes/Top rated/TopRated";
import {Upcoming} from "./Routes/upcoming/Upcoming";
import {MovieRoute} from "./Routes/Movie tab/Movie";
import {MainVideo} from "./Routes/Main Viceo Route/MainVideo";
import {
    fetchPopularAsync,
    fetchTopRatedAsync,
    fetchUpcomingAsync
} from "./store/Movies/Movies.action";
import {Auth} from "./Routes/authentication/auth";
import {auth,} from "./utils";
import {selectUser} from "./store/user/user.selector";
import {onAuthStateChanged, setPersistence,browserLocalPersistence} from "firebase/auth";
import {setAuthUser} from "./store/user/user.action";


function App() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    useEffect(()=>{
        const authChange = async ()=>{
            onAuthStateChanged(auth,(user)=>{

                if(user) {
                    dispatch(setAuthUser(user.uid))
                }
                else{
                    alert("No user found")
                }

            })

            try{
                await setPersistence(auth,browserLocalPersistence)
            }
            catch (e) {
                alert(e.message)
            }
        }
        dispatch(fetchTrendingMoviesAsync())
        dispatch(fetchUpcomingAsync())
        dispatch(fetchTopRatedAsync())
        dispatch(fetchPopularAsync())
        return authChange
    },[user])
  return (
      <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/all-movies"} element={<MovieRoute/>}>
              <Route index element={<NowPlaying/>}/>
              <Route path={":movieName/watch"} element={<MainVideo/> }/>
              <Route path={"popular"} element={<Popular/>}/>
              <Route path={"top-rated"} element={<TopRated/>}/>
              <Route path={"upcoming"} element={<Upcoming/>}/>
          </Route>
          <Route path={"/auth"} element={<Auth/>}/>
      </Routes>
  );
}

export default App;
