import {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNowPlaying, fetchNowPlayingAsync} from "../../store/Movies/Movies.action";
import {selectNowPlayingMovies} from "../../store/Movies/Movies.selector";
import {FadingBackground, MovieCard} from "../../component/Movie card/MovieCard";
import {BASE_URL, IMG_BASE_URL} from "../../utils";
import {NowPlayingContainer, PageButton, PaginationContainer} from "./nowPlaying.styles";
import axios from "axios";
import Modal, {BaseModalBackground, ModalProvider} from "styled-react-modal";


export const NowPlaying =()=>{
    const nowPlaying = useSelector(selectNowPlayingMovies)
    console.log(nowPlaying)
    const [pageNumber, setPageNumber] = useState(1)
    const dispatch = useDispatch()
    useEffect(()=>{
        /*dispatch(fetchNowPlayingAsync())*/
        axios.get(`${BASE_URL}movie/now_playing?api_key=672e218cbb77d06c47ae1e2d04209fb4&language=en-US&page=${pageNumber}`)
            .then((response)=> dispatch(fetchNowPlaying(response.data.results)))
            .catch(e=>window.alert(e))
    },[pageNumber])
    const nextPage =()=>{
         setPageNumber(pageNumber+1)
    }
    const prevPage =()=>{
        setPageNumber(pageNumber-1)
    }

    return(
        <ModalProvider backgroundComponent={FadingBackground}>

            <div className={"padding"}>
                <NowPlayingContainer>
                    {
                        nowPlaying.map((movie)=>
                            <MovieCard
                                image={`${IMG_BASE_URL + movie.poster_path}`}
                                title={movie.title}
                                backDrop={`${IMG_BASE_URL + movie.backdrop_path}`}
                                description={movie.overview}
                                rating={movie.vote_average}
                                releaseDate={movie.release_date}
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