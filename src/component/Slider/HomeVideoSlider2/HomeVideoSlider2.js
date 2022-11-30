
import {ImageDown, MovieBody, VideoApp, VideoPlayer} from "../HomeVideoSlider/HomeVideoSlider.styles";
import Avat from "../../../assests/images/avatar.jpg"
import Play from "../../../assests/images/play-button.png"
import {useSelector} from "react-redux";
import {selectLatestMovies, selectUpcomingMovies} from "../../../store/Movies/Movies.selector";
import {useCallback, useEffect, useLayoutEffect, useState} from "react";
import axios from "axios";
import {BASE_URL, IMG_BASE_URL} from "../../../utils";
import ReactPlayer from "react-player/lazy";
import {Loader} from "../../Loader/Loader";
import {StyledModal} from "../../Movie card/MovieCard.styles";
import {StyledModalHome} from "../../../Routes/Home/Home.styles";
export const HomeVideoSlider2=()=>{
    const latestMovies = useSelector(selectLatestMovies)
    const [key,setKey] = useState("")
    const [vid, setVid] = useState(false)


    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);


    function toggleModalHome(e) {
        setOpacity(0);
        setIsOpen(!isOpen);
    }

    function afterOpen() {
        setTimeout(() => {
            setOpacity(1);
        }, 100);


    }
    function beforeClose() {
        return new Promise((resolve) => {
            setOpacity(0);
            setTimeout(resolve, 300);
        });

    }

    const beforeOpen=(id)=>{
        return (
            axios
                .get(`${BASE_URL}movie/${id}/videos?api_key=672e218cbb77d06c47ae1e2d04209fb4&language=en-US`)
                .then(response=> (setKey(response.data?.results[0]?.key),setVid(false)))
                .then(response=>setVid(true))
                .catch(e=>{

                })
        )

    }


    return(
        <>
            {
                latestMovies.map((movie)=>
                    <MovieBody>
                        <ImageDown>
                            <img alt={"backdrop"} src={`${IMG_BASE_URL + movie?.backdrop_path}`}/>
                            <img alt={"backdrop"} src={Play}
                                 onMouseEnter={()=>setVid(true)}
                                 onClick={toggleModalHome}

                            />
                        </ImageDown>
                        <StyledModalHome
                            isOpen={isOpen}
                            beforeOpen={()=>beforeOpen(movie.id)}
                            afterOpen={afterOpen}
                            beforeClose={beforeClose}
                            onBackgroundClick={toggleModalHome}
                            onEscapeKeydown={toggleModalHome}
                            opacity={opacity}
                            backgroundProps={{ opacity }}>
                            {
                                vid ?
                                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${key}`}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; mute"
                                            allowFullScreen>

                                    </iframe>
                                    :
                                    <Loader/>
                            }


                        </StyledModalHome>
                    </MovieBody>
                )
            }
        </>
    )
}