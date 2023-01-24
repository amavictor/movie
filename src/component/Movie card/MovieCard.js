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
import {Skeleton} from "@mui/material";
import {useState} from "react";
import styled from "styled-components"
import {BaseModalBackground} from "styled-react-modal";
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Button} from "../Button/Button";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export const FadingBackground = styled(BaseModalBackground)`
      opacity: ${(props) => props.opacity};
      transition: all 0.3s ease-in-out;
    `

export const ratingChecker=(rating)=>{
    if(Math.floor(rating) <= 5){
        return "red"
    }
    else if(Math.floor(rating) > 5 && Math.floor(rating) <= 7){
        return "yellow"
    }
    else if (Math.floor(rating) > 7 && Math.floor(rating) <=10){
        return "green"
    }
}


export const toggleLike =(like,setLike)=>{

    like ? toast.error("Removed from like",{
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            closeButton: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            type:"error",
            position: toast.POSITION.TOP_RIGHT,
        }) :
        toast.success("Added to Like",{
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            closeButton: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            type:"success",
            position: toast.POSITION.TOP_RIGHT,
        })
    return setLike(!like)
}

export const MovieCard =(
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
    )=>{

    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const [like,setLike] = useState(false)
    const [parameter, setParameter] = useState("")

    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    ratingChecker(rating)

    function toggleModal(e) {
        setParameter(title)
        setOpacity(0);
        setIsOpen(!isOpen);
    }
    function navigateToVideo(){
        params.movieName = parameter
        console.log("this is param",params.movieName)
        navigate(`${location.pathname}/${parameter}/watch`,{state:{
                movieId
            }})
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






    return(
        <>

            <MovieCardContainer onClick={toggleModal}>
                {
                    image ? <img alt={"image"} src={image}/> :
                        <Skeleton variant={"rounded"} sx={{bgcolor: "#838383FF"}}>
                            <img/>
                        </Skeleton>
                }
                <div style={{marginTop:"5px"}}>
                    {
                        title ?  <p>{title}</p> :
                            <Skeleton variant={"rounded"} width={200} height={10} sx={{bgcolor:"#838383FF"}}/>
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
                                    <img alt={"image"} src={image}/>
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
                                <div onClick={()=>toggleLike(like,setLike)}>
                                    {
                                        like ? <FavoriteIcon className={"red"}/>
                                            :
                                            <FavoriteBorderIcon className={"red"}/>
                                    }
                                </div>

                            </div>
                            <Button size={"small"} onClick={navigateToVideo}>Watch Now</Button>
                        </LikeAndTrailer>
                        <ToastContainer/>

                    </>

                }


            </StyledModal>

        </>

    )
}