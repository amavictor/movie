import { HomeCircular, HoverDetails, Pg, SliderCards } from "./SliderCard.styles";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { ratingChecker } from "../Movie card/MovieCard";
import { useContext, useState } from "react";
import { PageProvider } from "../../context/Category.context";

export const SliderCard = ({ title, image, rating }) => {
    const [like, setLike] = useState()
    return (
        <SliderCards>
            <HoverDetails >
                <div className={"lift"}>
                    <p>{title}</p>
                    {/* <button onClick={() => toggleLike(like, setLike)}>{like ? `Remove from like` : `Add to like`}</button> */}
                    <button>Watch trailer</button>
                </div>
            </HoverDetails>
            <img alt={image} src={image} />
            <p>{title}</p>
            <div>
                <HomeCircular>
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
                </HomeCircular>
                <Pg>
                    PG 13
                </Pg>
            </div>


        </SliderCards>
    )
}