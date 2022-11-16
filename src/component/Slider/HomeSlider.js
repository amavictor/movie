import "swiper/css";
import "swiper/css/effect-cards";
import {Swiper,SwiperSlide} from "swiper/react";
import {EffectCards} from "swiper";
import {useSelector} from "react-redux";
import {selectTrendingMovies} from "../../store/Trending Movies/TrendingMovies.selector";
import {SliderCard} from "../Slider card/SliderCard";
import {IMG_BASE_URL} from "../../utils";


export const HomeSlider=()=>{
    const trendingMovies = useSelector(selectTrendingMovies)
    return(
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >

                {trendingMovies.map((movie)=>
                    <SwiperSlide>
                        <SliderCard
                            key={movie.id}
                            title={movie.title}
                            releaseDate={movie.release_date}
                            image={`${IMG_BASE_URL + movie.poster_path}`}
                        />
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    )
}