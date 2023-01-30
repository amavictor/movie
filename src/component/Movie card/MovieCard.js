import {
    BackDrop,
    LikeAndTrailer,
    ModalDetails,
    MovieCardContainer,
    Rating,
    RatingContainer,
    ReleaseDate,
    StyledModal
} from "./MovieCard.styles";
import { Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import styled from "styled-components"
import { BaseModalBackground } from "styled-react-modal";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Button } from "../Button/Button";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/user.selector";
import { updateDoc } from 'firebase/firestore';
import { toast } from "react-toastify";
import { doc } from 'firebase/firestore';
import { firebaseDb } from './../../utils';
import { selectLikedMoviesSelector } from './../../store/likes/likeSelector';
import { addLikedToLikesReducer, clearLikes, removeLikeFromRducer } from "../../store/likes/likeActions";




//Modal styling 
export const FadingBackground = styled(BaseModalBackground)`
      opacity: ${(props) => props.opacity};
      transition: all 0.3s ease-in-out;
    `
//Rating functions
export const ratingChecker = (rating) => {
    if (Math.floor(rating) <= 5) {
        return "red"
    }
    else if (Math.floor(rating) > 5 && Math.floor(rating) <= 7) {
        return "yellow"
    }
    else if (Math.floor(rating) > 7 && Math.floor(rating) <= 10) {
        return "green"
    }
}




export const MovieCard = (
    {
        id,
        image,
        title,
        backDrop,
        description,
        rating,
        releaseDate,
        movieId
    }
) => {
    const user = useSelector(selectUser)
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const [like, setLike] = useState(false)
    const [parameter, setParameter] = useState("")
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const likedMovies = useSelector(selectLikedMoviesSelector)

    //rating call
    ratingChecker(rating)

    function toggleModal(e) {
        setParameter(title)
        setOpacity(0);
        setIsOpen(!isOpen);
    }

    function navigateToVideo() {
        params.movieName = parameter
        console.log("this is param", params.movieName)
        navigate(`${location.pathname}/${parameter}/watch`, {
            state: {
                movieId
            }
        })
        console.log(`${location.pathname}`)
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


    //add and remove likes
    const success = (message) =>
    toast.success(`${message}`, {
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        closeButton: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        type: "success",
        position: toast.POSITION.TOP_RIGHT,
    })
    const error = (message,error)=>
     toast.error(`${message} ${error}`, {
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    closeButton: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    type: "error",
                    position: toast.POSITION.TOP_RIGHT,
                })


    const addLike = async (user, data, likedMovies) => {
        console.log("data", data)
        
        //if (likedMovies.includes(data) === false) {
            dispatch(addLikedToLikesReducer(data))
            // try {
            //     await updateDoc(doc(firebaseDb, "users", user), {
            //         LikedMovies: likedMovies
            //     })
            //     success("Added to like")
            // }
            // catch (e) {
            //     error("Something went wrong", e)
            // }

        // }
        // else {
        //     error("Already in liked movies"," ")
        // }
    }


    const removeLike = async (user, data, likedMovies) => {
        if (likedMovies.includes(data)) {
            dispatch(removeLikeFromRducer(likedMovies,data))
            // try {
            //     await updateDoc(doc(firebaseDb, "users", user), {
            //         LikedMovies: likedMovies
            //     })
            //     success("Removed from liked")
            // }
            // catch (e) {
            //     error("Something went wrong", e)
            // }
        }
        // else {
        //     error("You have not liked this movie")
        // }
    }



    // const toggleLike = async (like, setLike, user, data, likedMovies) => {
    //     like ? await removeLike(user, data, likedMovies) : await addLike(user, data, likedMovies)
    //     return setLike(!like)
    // }

    return (
        <>

            <MovieCardContainer onClick={toggleModal}>
                {
                    image ? <img alt={"cardImage"} src={image} /> :
                        <Skeleton variant={"rounded"} sx={{ bgcolor: "#838383FF" }}>
                            <img />
                        </Skeleton>
                }
                <div style={{ marginTop: "5px" }}>
                    {
                        title ? <p>{title}</p> :
                            <Skeleton variant={"rounded"} width={200} height={10} sx={{ bgcolor: "#838383FF" }} />
                    }
                </div>
            </MovieCardContainer>


            <StyledModal
                isOpen={isOpen}
                afterOpen={afterOpen}
                beforeClose={beforeClose}
                onEscapeKeydown={toggleModal}
                onBackgroundClick={toggleModal}
                opacity={opacity}
                backgroundProps={{ opacity }}
                allowScroll={true}
            >
                {
                    <>
                        <div>
                            <BackDrop backDrop={backDrop}>
                                <ModalDetails>
                                    <img alt={"MovieImage"} src={image} />
                                    <div>
                                        <h5>{title}</h5>
                                        <p>{description}</p>
                                        <RatingContainer>
                                            <Rating>
                                                <p>Rating</p>
                                                <CircularProgressbar
                                                    value={rating}
                                                    text={`${rating}`}
                                                    maxValue={10}
                                                    styles={buildStyles({
                                                        strokeLinecap: "butt",
                                                        textColor: ratingChecker(rating),
                                                        pathColor: ratingChecker(rating),
                                                        textSize: "25px"
                                                    })}
                                                />
                                            </Rating>
                                            <ReleaseDate>
                                                <p>Release date:</p>
                                                <p>{releaseDate}</p>
                                            </ReleaseDate>
                                        </RatingContainer>
                                    </div>
                                </ModalDetails>
                            </BackDrop>
                        </div>
                        <LikeAndTrailer>
                            <div>
                                <div /*onClick={() => toggleLike(like, setLike, user, title,likedMovies)}*/onClick={()=>removeLike(undefined, title, likedMovies)}>
                                    {
                                        like ? <FavoriteIcon className={"red"} />
                                            :
                                            <FavoriteBorderIcon className={"red"} />
                                    }
                                </div>

                            </div>
                            <Button size={"small"} onClick={navigateToVideo}>Watch Now</Button>
                        </LikeAndTrailer>
                        <ToastContainer />

                    </>

                }
            </StyledModal>

        </>

    )
}