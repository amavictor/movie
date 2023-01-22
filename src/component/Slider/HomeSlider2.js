import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import {useSelector} from "react-redux";
import {selectTrendingMovies, selectTrendingMoviesDay} from "../../store/Trending Movies/TrendingMovies.selector";
import {SliderCard} from "../Slider card/SliderCard";
import {IMG_BASE_URL} from "../../utils";
import {useContext} from "react";
import {PageContext} from "../../context/Category.context";

export const HomeSlider2=()=> {
    const trendingMoviesDay = useSelector(selectTrendingMoviesDay)
    const trendingMovies = useSelector(selectTrendingMovies)
    const {moviesDay} = useContext(PageContext)
    return (
        <>
            <Swiper
                slidesPerView={6}
                spaceBetween={180}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter:true
                }}
                modules={[Autoplay]}
                /*breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween:0,
                    },
                }}*/

            >
                {
                    moviesDay ?

                    trendingMoviesDay.map((movie,index)=>
                        <SwiperSlide key={index}>
                            <SliderCard
                                title={movie.title}
                                image={`${IMG_BASE_URL + movie.poster_path}`}
                                rating={movie.vote_average}
                            />
                        </SwiperSlide>
                    )
                        :
                        trendingMovies.map((movie,index)=>
                            <SwiperSlide>
                                <SliderCard
                                    key={index}
                                    title={movie.title}
                                    image={`${IMG_BASE_URL + movie.poster_path}`}
                                    rating={movie.vote_average}
                                />
                            </SwiperSlide>
                        )
                }
            </Swiper>
        </>
    );
}
