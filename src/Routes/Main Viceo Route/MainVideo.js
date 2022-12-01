import {VideoNavbar} from "../../component/Video navbar/VideoNavbar";
import {
    Details, DetailsSlider,
    FirstDivision, ImageContainer,
    MainContainer, MainVideoCarouselCard,
    MainVideoCarouselContainer, MovieDetails, MovieVideo, MovieVideos, ProductionCompany, RatingContainerMain,
    RatingMain,
    VideoBody, VideoBodyHolder
} from "./MainVideo.styles";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useLayoutEffect, useState} from "react";
import axios from "axios";
import {BASE_URL, IMG_BASE_URL} from "../../utils";
import {toast, ToastContainer} from "react-toastify";
import {PageContext} from "../../context/Category.context";
import {ratingChecker} from "../../component/Movie card/MovieCard";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import ClearIcon from '@mui/icons-material/Clear';
import {ModalProvider} from "styled-react-modal";
import ReactPlayer from "react-player/lazy";
import {RotateIcon} from "../../component/Navbar/Navbar.styles";
import {Trailer} from "../../component/Movie card/MovieCard.styles";
import {Loader} from "../../component/Loader/Loader";

export const MainVideo =()=>{
    const location = useLocation()
    const [info, setInfo] = useState("")
    const [recommendations, setRecommendations] = useState([])
    const {setNoNav} = useContext(PageContext)
    const [slide, setSlide] = useState(false)
    const [pageNumber, setPageNumber] = useState(2)
    const[show,setShow] = useState(true)
    const [parameter,setParameter] = useState()
    const [videos, setVideos] = useState("")
    const params = useParams()
    const navigate = useNavigate()
    const IncreaseRecommendation =()=>{
        axios.get(`${BASE_URL}movie/${location.state.movieId}/recommendations?api_key=672e218cbb77d06c47ae1e2d04209fb4&language=en-US&page=${pageNumber}`)
            .then(response=>{
                const newMovies = response.data.results
                newMovies.shift()
                setRecommendations(recommendations.concat(newMovies))

            })
            .catch(e=>console.log("an error occured"))
        console.log(recommendations)
        setPageNumber(pageNumber+1)
        console.log(pageNumber)
    }


    useLayoutEffect(()=>{
        setNoNav(true)
        console.log("I am main video")
    },[])

    useEffect(()=>{
        const movieInfo = axios.get(`${BASE_URL}movie/${location.state.movieId}?api_key=672e218cbb77d06c47ae1e2d04209fb4&language=en-US`)
        const movieRecommendations  = axios.get(`${BASE_URL}movie/${location.state.movieId}/recommendations?api_key=672e218cbb77d06c47ae1e2d04209fb4&language=en-US&page=1`)
        const videos = axios.get(`https://api.themoviedb.org/3/movie/${location.state.movieId}/videos?api_key=672e218cbb77d06c47ae1e2d04209fb4&language=en-US`)
        axios.all   ([movieInfo,movieRecommendations,videos])
            .then(axios.spread((...response)=>{
                const movieInfoResponse = response[0]
                const movieRecommendationResponse = response[1]
                const videosResponse = response[2]
                setInfo(movieInfoResponse.data)
                setRecommendations(movieRecommendationResponse.data.results)
                setVideos(videosResponse.data.results)
                ratingChecker(info.vote_average)
            }))
            .catch(e=>{

            })
    },[])
    console.log(location.pathname)
    console.log(location.state.movieId)
    const toggleSlid =()=>{
        return (setSlide(!slide),setShow(true))
    }
    const Navigate =(param,movieId)=>{
        setParameter(param)
        params.movieName=parameter
        navigate(`${location.pathname}/${parameter}/watch`,{replace:true, state:{
                movieId
            }})

    }

    return(
        <ModalProvider>
            <VideoBodyHolder>
                <VideoBody backDrop={`${IMG_BASE_URL + info.backdrop_path}`}>
                    <VideoNavbar title={info.title} slide={slide} setSlide={setSlide} show={show} setShow={setShow}/>
                    <MainContainer>
                        <FirstDivision>
                            <Details>
                                <h3>{info.title}</h3>
                                <RatingContainerMain>
                                    <Trailer>
                                        <p>Watch trailer</p>
                                    </Trailer>

                                    <RatingMain>
                                        <CircularProgressbar
                                            value={Math.round(info.vote_average * 10)/10}
                                            text={`${Math.round(info.vote_average * 10)/10}`}
                                            maxValue={10}
                                            styles={buildStyles({
                                                strokeLinecap: "butt",
                                                textColor: ratingChecker(info.vote_average),
                                                pathColor: ratingChecker(info.vote_average),
                                                textSize: "25px"
                                            })}
                                        />
                                    </RatingMain>
                                </RatingContainerMain>
                            </Details>
                            <p>Recommended movies just like {info.title}</p>
                            <MainVideoCarouselContainer>
                                {
                                    recommendations.map((movie)=>
                                        movie.poster_path &&
                                        <MainVideoCarouselCard
                                            onClick={()=>Navigate(movie.title,movie.id)}
                                            backDrop={`${IMG_BASE_URL + movie.poster_path}`}
                                        >
                                            <p>{movie.title}</p>

                                        </MainVideoCarouselCard>)


                                }
                                <h4 onClick={IncreaseRecommendation}>View more</h4>

                            </MainVideoCarouselContainer>
                        </FirstDivision>
                        {
                            slide &&
                            <DetailsSlider>
                                <div>
                                    <RotateIcon>
                                        <ClearIcon fontSize={"large"} onClick={toggleSlid}/>
                                    </RotateIcon>

                                </div>
                                <ImageContainer>
                                    <img src={`${IMG_BASE_URL + info?.poster_path}`}/>
                                </ImageContainer>
                                <div>
                                    <p>{info?.tagline}</p>
                                </div>

                                <hr/>
                                <p>{info?.overview}</p>
                                <MovieDetails>
                                    <p>Release date: {info?.release_date}</p>
                                    <p>Adult: No </p>
                                    <p>Genre:</p>
                                    <p><a href={info.homepage} target={"_blank"} rel={"noopener noreferrer"}>Home page</a></p>
                                    <p>Production companies: {info?.production_companies.map((info)=> <ProductionCompany>
                                       <p>{info.name}</p>
                                    </ProductionCompany>)}</p>
                                    <div>
                                        <p>Status:{info?.status}</p>
                                    </div>
                                </MovieDetails>
                                <MovieVideos>
                                    {
                                        videos.map((vid)=>

                                            (
                                                vid ?
                                                <MovieVideo onClick={toggleSlid}>
                                                    <ReactPlayer
                                                        url={`https://www.youtube.com/watch?v=${vid?.key}`}
                                                        width='100%'
                                                        height='100%'
                                                        loop={true}
                                                        controls={true}
                                                        muted={true}
                                                        playing={false}
                                                    />
                                                    <p>{vid?.type}</p>
                                                </MovieVideo>
                                                    :
                                                    <Loader/>

                                            )

                                           )
                                    }

                                </MovieVideos>
                            </DetailsSlider>
                        }

                    </MainContainer>
                    <ToastContainer/>
                </VideoBody>
            </VideoBodyHolder>

        </ModalProvider>
    )
}