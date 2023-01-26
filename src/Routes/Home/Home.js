import {Navbar} from "../../component/Navbar/Navbar";
import {Button} from "../../component/Button/Button";
import {
    Background,
    ButtonHolder,
    CategoryContainer,
    CategoryContainerTitle,
    CategorySection,
    Glow,
    Glow2,
    HomeSlider2Container,
    Intro,
    Trending,
    TrendingElements,
    TrendingWeek,
    UpcomingMovies
} from "./Home.styles";
import {HomeSlider} from "../../component/Slider/HomeSlider";
import {CategoryCardComponent} from "../../component/Category card home/CategoryCard.component";
import {HomeSlider2} from "../../component/Slider/HomeSlider2";
import {useContext} from "react";
import {PageContext} from "../../context/Category.context";
import {HomeSliderTopRated} from "../../component/Slider/HomeSliderTopRated";
import {HomeSliderPopular} from "../../component/Slider/HomeSliderPopular";
import {HomeVideoSlider} from "../../component/Slider/HomeVideoSlider/HomeVideoSlider";
import {HomeVideoCarouselContainer} from "../../component/Slider/HomeVideoSlider/HomeVideoSlider.styles";
import {FadingBackground} from "../../component/Movie card/MovieCard";
import {ModalProvider} from "styled-react-modal";
import {Footer} from "../../component/footer/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ToastContainer} from "react-toastify";
import {useSelector} from "react-redux";
import {selectLike} from "../../store/LikedCart/like.selector";


export const Home = () => {
    const {moviesDay, setMoviesDay} = useContext(PageContext)
    AOS.init()
    return (
        <>
            <ModalProvider backgroundComponent={FadingBackground}>
                <header>
                    <Background>
                        <Navbar/>
                        <Intro className={"padding"}>
                            <h5>Welcome</h5>
                            <div>
                                <h2>Enjoy non-stop entertainment</h2>
                                <p>Forget the cinemas, we've got you covered. <br/> Enjoy the cinema experience your
                                    laptop,
                                    and mobile screens.</p>
                                <ButtonHolder>
                                    <Button secondary>Show plan</Button>
                                    <Button type={"primary"}>Get started</Button>
                                </ButtonHolder>
                            </div>
                        </Intro>
                        <div className={"black"}/>
                    </Background>
                </header>
                <Trending>
                    <Glow/>
                    <TrendingWeek
                        data-aos="fade-down"
                        data-aos-anchor-placement="center-center"
                        data-aos-duration={"500"}
                        data-aos-easing="ease-in-out"
                    >
                        <h3>Trending Movies</h3>
                        <div>
                            <h4 onClick={() => setMoviesDay(true)} className={moviesDay && "day"}>Today</h4>
                            <h4 onClick={() => setMoviesDay(false)} className={moviesDay ? null : "day"}>This week</h4>
                        </div>
                    </TrendingWeek>
                    <TrendingElements
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-center"
                        data-aos-duration={"500"}
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >
                        <HomeSlider2Container>
                            <HomeSlider2/>
                        </HomeSlider2Container>
                    </TrendingElements>
                </Trending>
                <UpcomingMovies>
                    <TrendingWeek
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-center"
                        data-aos-duration={"500"}
                        data-aos-easing="ease-in-out"
                    >
                        <h3>Upcoming Movies</h3>
                    </TrendingWeek>
                    <TrendingElements
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-center"
                        data-aos-duration={"500"}
                        data-aos-easing="ease-in-out"
                    >
                        <HomeSlider2Container>
                            <HomeSlider/>
                        </HomeSlider2Container>
                    </TrendingElements>
                    <Glow2/>
                </UpcomingMovies>
                <UpcomingMovies>
                    <TrendingWeek>
                        <h3
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-center"
                            data-aos-duration={"700"}
                            data-aos-easing="ease-in-out"
                        >Top rated Movies</h3>
                    </TrendingWeek>
                    <TrendingElements>
                        <HomeSlider2Container>
                            <HomeSliderTopRated/>
                        </HomeSlider2Container>
                    </TrendingElements>

                </UpcomingMovies>
                <UpcomingMovies>
                    <TrendingWeek
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-center"
                        data-aos-duration={"500"}
                        data-aos-easing="ease-in-out"
                    >
                        <h3>Popular Movies</h3>
                    </TrendingWeek>
                    <TrendingElements
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-center"
                        data-aos-duration={"500"}
                        data-aos-easing="ease-in-out"
                    >
                        <HomeSlider2Container>
                            <HomeSliderPopular/>
                        </HomeSlider2Container>
                    </TrendingElements>

                </UpcomingMovies>
                <UpcomingMovies>
                    <TrendingWeek
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-center"
                        data-aos-duration={"500"}
                        data-aos-easing="ease-in-out"
                    >
                        <h3>Latest Trailers</h3>
                    </TrendingWeek>
                    <TrendingElements

                        data-aos="fade-up"
                        data-aos-anchor-placement="center-center"
                        data-aos-duration={"500"}
                        data-aos-easing="ease-in-out"
                    >

                        <HomeVideoCarouselContainer>
                            <HomeVideoSlider/>
                        </HomeVideoCarouselContainer>
                    </TrendingElements>
                    <Glow/>
                </UpcomingMovies>

                <UpcomingMovies>
                    <TrendingWeek
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-center"
                        data-aos-duration={"500"}
                        data-aos-easing="ease-in-out"
                    >
                        <h3>Popular movie clips</h3>
                    </TrendingWeek>
                    <TrendingElements>
                        <HomeVideoCarouselContainer
                            data-aos="fade-left"
                            data-aos-anchor-placement="center-center"
                            data-aos-duration={"500"}
                            data-aos-easing="ease-in-out"
                        >
                            <HomeVideoSlider
                                popular={true}
                            />
                        </HomeVideoCarouselContainer>
                    </TrendingElements>
                </UpcomingMovies>
                <CategorySection>
                    <CategoryContainer>
                        <CategoryContainerTitle>
                            <h3>Select your favourite category </h3>
                            <p>Pick a movie from any of the categories. Be sure we've got you covered. </p>
                        </CategoryContainerTitle>
                        <CategoryCardComponent/>
                    </CategoryContainer>
                    <Glow2/>
                </CategorySection>
                <Footer/>
                <ToastContainer/>
            </ModalProvider>


        </>
    )
}