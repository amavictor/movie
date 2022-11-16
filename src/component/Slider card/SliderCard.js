import {SliderCards} from "./SliderCard.styles";

export const SliderCard =({title, releaseDate, image})=>{
    return(
        <SliderCards>
            <img src={image}/>
            <p>{title}</p>
            <p>Release date: {releaseDate}</p>
        </SliderCards>
    )
}