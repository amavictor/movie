import {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNowPlaying, fetchNowPlayingAsync} from "../../store/Movies/Movies.action";
import {
    selectLatestMovies,
    selectNowPlayingMovies,
    selectPopularMovies,
    selectTopRatedMovies,
    selectUpcomingMovies
} from "../../store/Movies/Movies.selector";
import {FadingBackground, MovieCard} from "../../component/Movie card/MovieCard";
import {BASE_URL, IMG_BASE_URL} from "../../utils";
import {NowPlayingContainer, PageButton, PaginationContainer} from "../No playing/nowPlaying.styles";
import axios from "axios";
import {ModalProvider} from "styled-react-modal";
import {PageContext} from "../../context/Category.context";
import {GenreHeaders} from "./Genres.styles";
import {useLocation} from "react-router-dom";


export const Genres =({GType})=>{
    const nowPlaying = useSelector(selectNowPlayingMovies)
    const popular = useSelector(selectPopularMovies)
    const topRated = useSelector(selectTopRatedMovies)
    const upComing = useSelector(selectUpcomingMovies)
    const latest = useSelector(selectLatestMovies)
    const [pageNumber, setPageNumber] = useState(1)
    const {setNoNav} = useContext(PageContext)
    const location = useLocation()
    const [genres, setGenres] = useState([])
    useEffect(()=>{
        setNoNav(false)
        /*dispatch(fetchNowPlayingAsync())*/

            // let topRatedFilter = (topRated.filter((item,index)=> item.genre_ids.includes(28)))
            // let popularFilter = (popular.filter((item,index)=> item.genre_ids.includes(28)))
            // let upcomingFilter = (upComing.filter((item,index)=> item.genre_ids.includes(28)))
            // let latestFilter = (latest.filter((item,index)=> item.genre_ids.includes(28)))
            // const actionGenre = [...topRatedFilter,...popularFilter,...upcomingFilter,...latestFilter]
            // setGenres(actionGenre)
            // console.log("This is that",actionGenre)

    },[genres])

    const nextPage =()=>{
        setPageNumber(pageNumber+1)
    }
    const prevPage =()=>{
        setPageNumber(pageNumber-1)
    }

    return(
        <ModalProvider backgroundComponent={FadingBackground}>

            <div className={"padding"}>

                <GenreHeaders>
                    <h2>{location.state?.title.toString()} Movies</h2>
                </GenreHeaders>

                <NowPlayingContainer>
                    {
                        genres?.map((movie)=>
                            <MovieCard
                                image={`${IMG_BASE_URL + movie.poster_path}`}
                                title={movie.title}
                                backDrop={`${IMG_BASE_URL + movie.backdrop_path}`}
                                description={movie.overview}
                                rating={movie.vote_average}
                                releaseDate={movie.release_date}
                                movieId={movie.id}
                            />
                        )
                    }
                </NowPlayingContainer>

                {/*<PaginationContainer>*/}
                {/*    <PageButton onClick={prevPage}>-</PageButton>*/}
                {/*    <p>{pageNumber}</p>*/}
                {/*    <PageButton onClick={nextPage}>+</PageButton>*/}
                {/*</PaginationContainer>*/}

            </div>

        </ModalProvider>

    )
}