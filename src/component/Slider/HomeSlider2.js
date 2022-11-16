import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";
import {useSelector} from "react-redux";
import {selectTrendingMoviesDay} from "../../store/Trending Movies/TrendingMovies.selector";
import {Slide} from "@mui/material";
import {SliderCard} from "../Slider card/SliderCard";
import {IMG_BASE_URL} from "../../utils";

export const HomeSlider2=()=> {
    const trendingMoviesDay = useSelector(selectTrendingMoviesDay)
    console.log(trendingMoviesDay)
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter:true
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    trendingMoviesDay.map((movie)=>
                        <SwiperSlide>
                            <SliderCard
                                image={`${IMG_BASE_URL + movie.poster_path}`}
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}
