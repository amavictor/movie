import {useDispatch, useSelector} from "react-redux";
import {selectNowPlayingMovies, selectTopRatedMovies} from "../../store/Movies/Movies.selector";
import {useContext, useEffect, useState} from "react";
import {PageContext} from "../../context/Category.context";
import axios from "axios";
import {BASE_URL, IMG_BASE_URL} from "../../utils";
import {fetchNowPlaying, fetchTopRated} from "../../store/Movies/Movies.action";
import {ModalProvider} from "styled-react-modal";
import {FadingBackground, MovieCard} from "../../component/Movie card/MovieCard";
import {NowPlayingContainer, PageButton, PaginationContainer} from "../No playing/nowPlaying.styles";

export const TopRated =()=> {
    const topRated = useSelector(selectTopRatedMovies)
    const [pageNumber, setPageNumber] = useState(1)
    const {setNoNav} = useContext(PageContext)
    const dispatch = useDispatch()
    useEffect(() => {
        setNoNav(false)
        /*dispatch(fetchNowPlayingAsync())*/
        axios.get(`${BASE_URL}movie/top_rated?api_key=672e218cbb77d06c47ae1e2d04209fb4&language=en-US&page=${pageNumber}`)
            .then((response) => dispatch(fetchTopRated(response.data.results)))
            .catch(e => window.alert(e))
    }, [pageNumber])
    const nextPage = () => {
        setPageNumber(pageNumber + 1)
    }
    const prevPage = () => {
        setPageNumber(pageNumber - 1)
    }

    return (
        <ModalProvider backgroundComponent={FadingBackground}>

            <div className={"padding"}>
                <NowPlayingContainer>
                    {
                        topRated.map((movie) =>
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

                <PaginationContainer>
                    <PageButton onClick={prevPage}>-</PageButton>
                    <p>{pageNumber}</p>
                    <PageButton onClick={nextPage}>+</PageButton>
                </PaginationContainer>

            </div>

        </ModalProvider>

    )
}
