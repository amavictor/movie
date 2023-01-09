import {Link, Outlet} from "react-router-dom";
import {MovieLink, MovieNavContainer, Nav, Title} from "./Movie.styles";

import {useContext} from "react";
import {PageContext} from "../../context/Category.context";
import {Navbar} from "../../component/Navbar/Navbar";

export const MovieRoute =()=>{
    const {noNav} = useContext(PageContext)
    return(
        <>
            <Navbar/>
            {
                noNav ? null
                    :
                    <MovieNavContainer className={"padding"}>
                        <Title>
                            Access to all your favourite movies
                        </Title>
                        <Nav>
                            <MovieLink to={"/all-movies"}>Now playing</MovieLink>
                            <MovieLink to={"popular"}>Popular</MovieLink>
                            <MovieLink to={"top-rated"}>Top rated</MovieLink>
                            <MovieLink to={"upcoming"}>Upcoming movies</MovieLink>
                        </Nav>
                    </MovieNavContainer>
            }

            <Outlet/>
        </>

    )
}