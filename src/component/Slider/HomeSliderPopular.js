import "swiper/css";
import "swiper/css/effect-cards";
import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay, EffectCards} from "swiper";
import {useSelector} from "react-redux";
import {selectTrendingMovies} from "../../store/Trending Movies/TrendingMovies.selector";
import {SliderCard} from "../Slider card/SliderCard";
import {IMG_BASE_URL} from "../../utils";
import {selectLatestMovies, selectPopularMovies, selectUpcomingMovies} from "../../store/Movies/Movies.selector";


export const HomeSliderPopular=()=>{
    const PopulaMovies = useSelector(selectPopularMovies)
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
                    PopulaMovies?.map((movie)=>
                        <SwiperSlide>
                            <SliderCard
                                key={movie.id}
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