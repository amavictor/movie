import {
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
import {Link} from "react-router-dom";



export const FadingBackground = styled(BaseModalBackground)`
      opacity: ${(props) => props.opacity};
      transition: all 0.3s ease-in-out;
    `
export const MovieCard =(
    {
        image,
        title,
        backDrop,
        description,
        rating,
        releaseDate
    }
    )=>{

    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const [like,setLike] = useState(false)
    function toggleModal(e) {
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
    const BackDrop = styled.div`
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0,  0.3)), url(${backDrop});
      background-repeat: no-repeat;
      background-size: cover;
      height: 45vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      h5{
        font-size: 24px;
      }
      p{
        line-height: 1.5;
        font-size: 14px;
      }
      img{
        width: 170px;
        height: 200px;
        object-fit: cover;
      }
    `

    const ratingChecker=(rating)=>{
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

    const toggleLike =()=>{
        return setLike(!like)
    }
    return(
        <>

            <MovieCardContainer onClick={toggleModal}>
                {
                    image ? <img src={image}/> :
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
            >
                <div>
                    <BackDrop>
                        <ModalDetails>
                            <img src={image}/>
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
                        <div onClick={toggleLike}>

                            {
                                like ? <FavoriteIcon className={"red"}/>
                                    :
                                    <FavoriteBorderIcon className={"red"}/>
                            }

                        </div>

                        <Link to={"#"}>Watch trailer</Link>
                    </div>

                    <Button size={"small"}>Watch Now</Button>

                </LikeAndTrailer>

            </StyledModal>
        </>

    )
}