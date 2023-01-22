import "swiper/css";
import "swiper/css/effect-cards";
import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay, EffectCards} from "swiper";
import {useSelector} from "react-redux";
import {selectTrendingMovies} from "../../store/Trending Movies/TrendingMovies.selector";
import {SliderCard} from "../Slider card/SliderCard";
import {IMG_BASE_URL} from "../../utils";
import {selectUpcomingMovies} from "../../store/Movies/Movies.selector";


export const HomeSlider=()=>{
    const latestMovies = useSelector(selectUpcomingMovies)
    return(
        <>
            <Swiper
                slidesPerView={6}
                spaceBetween={180}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter:true
                }}
                modules={[Autoplay]}

            >
                {
                    latestMovies?.map((movie,index)=>
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