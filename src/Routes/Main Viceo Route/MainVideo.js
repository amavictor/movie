import {VideoNavbar} from "../../component/Video navbar/VideoNavbar";
import {
    Details, DetailsSlider,
    FirstDivision, ImageContainer,
    MainContainer, MainVideoCarouselCard,
    MainVideoCarouselContainer, MovieDetails, RatingContainerMain,
    RatingMain,
    VideoBody
} from "./MainVideo.styles";
import {Link, useLocation} from "react-router-dom";
import {useContext, useEffect, useLayoutEffect, useState} from "react";
import axios from "axios";
import {BASE_URL, IMG_BASE_URL, TRENDING_MOVIES_BY_DAY_URL, TRENDING_MOVIES_BY_WEEK_URL} from "../../utils";
import {toast, ToastContainer} from "react-toastify";
import {PageContext} from "../../context/Category.context";
import {ratingChecker} from "../../component/Movie card/MovieCard";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {Rating, RatingContainer} from "../../component/Movie card/MovieCard.styles";
import {
    fetchMoviesFailed,
    fetchMoviesStart,
    fetchMoviesSuccess
} from "../../store/Trending Movies/TrendingMovies.action";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import WidgetsTwoToneIcon from '@mui/icons-material/WidgetsTwoTone';

export const MainVideo =()=>{
    const location = useLocation()
    const [info, setInfo] = useState("")
    const [recommendations, setRecommendations] = useState([])
    const {setNoNav} = useContext(PageContext)
    const [pageNumber, setPageNumber] = useState(2)
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
    },[])

    useEffect(()=>{
        const movieInfo = axios.get(`${BASE_URL}movie/${location.state.movieId}?api_key=672e218cbb77d06c47ae1e2d04209fb4&language=en-US`)
        const movieRecommendations  = axios.get(`${BASE_URL}movie/${location.state.movieId}/recommendations?api_key=672e218cbb77d06c47ae1e2d04209fb4&language=en-US&page=1`)
        axios.all   ([movieInfo,movieRecommendations])
            .then(axios.spread((...response)=>{
                const movieInfoResponse = response[0]
                const movieRecommendationResponse = response[1]
                setInfo(movieInfoResponse.data)
                setRecommendations(movieRecommendationResponse.data.results)
                ratingChecker(info.vote_average)
            }))
            .catch(e=>{

            })
    },[])
    console.log(info)
    return(
        <>
            <VideoBody backDrop={`${IMG_BASE_URL + info.backdrop_path}`} >
                <VideoNavbar title={info.title}/>
                <MainContainer>
                    <FirstDivision>
                        <Details>
                            <h3>{info.title}</h3>
                            <RatingContainerMain>
                                <p>Watch trailer</p>
                                <RatingMain>
                                    <CircularProgressbar
                                        value={Math.floor(info.vote_average)}
                                        text={`${Math.floor(info.vote_average)}`}
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
                                        backDrop={`${IMG_BASE_URL + movie.poster_path}`}
                                    >
                                        <p>{movie.title}</p>

                                    </MainVideoCarouselCard>)


                            }
                            <h4 onClick={IncreaseRecommendation}>View more</h4>

                        </MainVideoCarouselContainer>
                    </FirstDivision>
                    <DetailsSlider>
                        <div>
                            <WidgetsTwoToneIcon fontSize={"large"}/>
                        </div>
                        <ImageContainer>
                            <img src={`${IMG_BASE_URL + info.poster_path}`}/>
                            <RatingContainerMain>
                                <RatingMain>
                                    <CircularProgressbar
                                        value={Math.floor(info.vote_average)}
                                        text={`${Math.floor(info.vote_average)}`}
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
                        </ImageContainer>
                        <hr/>
                        <p>{info.overview}</p>
                        <MovieDetails>


                        </MovieDetails>
                    </DetailsSlider>
                </MainContainer>
                <ToastContainer/>
            </VideoBody>
        </>
    )
}