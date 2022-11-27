import "./HomeVideoSlider.styles"
import {ImageDown, MovieBody, VideoApp} from "./HomeVideoSlider.styles";
import Avat from "../../../assests/images/avatar.jpg"
import Play from "../../../assests/images/play-button.png"
import {useSelector} from "react-redux";
import {selectUpcomingMovies} from "../../../store/Movies/Movies.selector";
import {useCallback, useEffect, useLayoutEffect, useState} from "react";
import axios from "axios";
import {BASE_URL, IMG_BASE_URL} from "../../../utils";
import ReactPlayer from "react-player/lazy";
import {Loader} from "../../Loader/Loader";
export const HomeVideoSlider=()=>{
    const latestMovies = useSelector(selectUpcomingMovies)
    const [key,setKey] = useState("")
    const [vid, setVid] = useState(true)

    const getVideos =useCallback((id)=>{
        vid &&
        axios.get(`${BASE_URL}movie/${id}/videos?api_key=672e218cbb77d06c47ae1e2d04209fb4&language=en-US`)
            .then(response=>/*setKey(response.data.results.key)*/
                setKey(response.data?.results[0]?.key))
            .catch(e=>{

            })
            .finally(e=>{
                setVid(false)
            })
    },[])
    

    return(
        <>
            {
                latestMovies.map((movie)=>
                    <MovieBody onMouseEnter={()=>getVideos(movie.id)} onMouseLeave={()=>(setVid(true))}>
                        <ImageDown>
                            <img src={`${IMG_BASE_URL + movie?.backdrop_path}`}/>
                            <img src={Play}/>
                        </ImageDown>
                        <VideoApp>
                            {
                                vid ?
                                    <ReactPlayer
                                        url={`https://www.youtube.com/watch?v=${key}`}
                                        width='inherit'
                                        height='inherit'
                                        loop={true}
                                        controls={true}
                                        muted={true}
                                        playing={true}
                                    />
                                    :
                                    <Loader/>
                            }

                        </VideoApp>
                    </MovieBody>
                )


            }

        </>
    )
}