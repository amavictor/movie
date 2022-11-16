import {Link, Outlet} from "react-router-dom";
import {MovieLink, MovieNavContainer, Title} from "./Movie.styles";
import {useDispatch} from "react-redux";
import {fetchNowPlayingAsync} from "../../store/Movies/Movies.action";

export const MovieRoute =()=>{
    const dispatch = useDispatch()
    return(
        <>
            <MovieNavContainer className={"padding"}>
                <Title>
                    Access to all your favourite movies
                </Title>
                <nav>
                    <MovieLink to={"/all-movies"}>Now playing</MovieLink>
                    <MovieLink to={"popular"}>Popular</MovieLink>
                    <MovieLink to={"top-rated"}>Top rated</MovieLink>
                    <MovieLink to={"upcoming"}>Upcoming movies</MovieLink>
                </nav>
            </MovieNavContainer>
            <Outlet/>
        </>

    )
}