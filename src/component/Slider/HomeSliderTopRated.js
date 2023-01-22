import "swiper/css";
import "swiper/css/effect-cards";
import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import {useSelector} from "react-redux";
import {SliderCard} from "../Slider card/SliderCard";
import {IMG_BASE_URL} from "../../utils";
import {selectTopRatedMovies} from "../../store/Movies/Movies.selector";


export const HomeSliderTopRated=()=>{
    const topRatedMovies = useSelector(selectTopRatedMovies)
    return(
        <>
            <Swiper
                slidesPerView={6}
                spaceBetween={180}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter:true
                }}
                modules={[Autoplay]}

            >
                {
                    topRatedMovies?.map((movie,index)=>
                        <SwiperSlide key={index}>
                            <SliderCard
                                title={movie.title}
                                image={`${IMG_BASE_URL + movie.poster_path}`}
                                rating={movie.vote_average}
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    )
}