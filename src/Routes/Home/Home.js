import {Navbar} from "../../component/Navbar/Navbar";
import {Button} from "../../component/Button/Button";
import {
    Background,
    ButtonHolder, CategoryCardsContainer,
    CategoryContainer, CategoryContainerTitle, CategorySection, Dark, Glow, Glow2, HomeSlider2Container,
    HomeSliderContainer,
    Intro,
    Line,
    SnapContainer,
    Trending, TrendingDay, TrendingElements, TrendingWeek, UpcomingMovies
} from "./Home.styles";
import{HomeSlider} from "../../component/Slider/HomeSlider";
import {motion} from "framer-motion";
import {CategoryCardComponent} from "../../component/Category card home/CategoryCard.component";
import {HomeSlider2} from "../../component/Slider/HomeSlider2";
import {useContext} from "react";
import {PageContext, PageProvider} from "../../context/Category.context";
import {HomeSliderTopRated} from "../../component/Slider/HomeSliderTopRated";
import {HomeSliderPopular} from "../../component/Slider/HomeSliderPopular";
import {HomeVideoSlider} from "../../component/Slider/HomeVideoSlider/HomeVideoSlider";
import {MainVideoCarouselContainer} from "../Main Viceo Route/MainVideo.styles";
import {HomeVideoCarouselContainer} from "../../component/Slider/HomeVideoSlider/HomeVideoSlider.styles";

export const Home = () => {
    const {moviesDay, setMoviesDay} = useContext(PageContext)

    return(
      <>
        <header>
            <Background>
                <Navbar/>
                <Intro className={"padding"}>
                    <h5>Welcome</h5>
                    <div>
                        <h2>Enjoy non-stop entertainment</h2>
                        <p>Forget the cinemas, we've got you covered. <br/> Enjoy the cinema experience your laptop,
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
          <Trending >
              <Glow/>
              <TrendingWeek>
                  <h3>Trending Movies</h3>
                  <div>
                      <h4 onClick={()=>setMoviesDay(true)} className={moviesDay && "day"}>Today</h4>
                      <h4 onClick={()=>setMoviesDay(false)} className={moviesDay ? null : "day"}>This week</h4>
                  </div>
              </TrendingWeek>
              <TrendingElements>
                  <HomeSlider2Container>
                      <HomeSlider2/>
                  </HomeSlider2Container>
              </TrendingElements>
          </Trending>
          <UpcomingMovies >
              <TrendingWeek>
                  <h3>Upcoming Movies</h3>
              </TrendingWeek>
              <TrendingElements>
                  <HomeSlider2Container>
                      <HomeSlider/>
                  </HomeSlider2Container>
              </TrendingElements>
              <Glow2/>
          </UpcomingMovies>
          <UpcomingMovies >
              <TrendingWeek>
                  <h3>Top rated Movies</h3>
              </TrendingWeek>
              <TrendingElements>
                  <HomeSlider2Container>
                      <HomeSliderTopRated/>
                  </HomeSlider2Container>
              </TrendingElements>

          </UpcomingMovies>
          <UpcomingMovies>
              <TrendingWeek>
                  <h3>Popular Movies</h3>
              </TrendingWeek>
              <TrendingElements>
                  <HomeSlider2Container>
                      <HomeSliderPopular/>
                  </HomeSlider2Container>
              </TrendingElements>

          </UpcomingMovies>
          <UpcomingMovies>
              <TrendingWeek>
                  <h3>Popular Trailers</h3>
              </TrendingWeek>
              <TrendingElements>

                  <HomeVideoCarouselContainer>
                      <HomeVideoSlider/>
                  </HomeVideoCarouselContainer>
              </TrendingElements>
          </UpcomingMovies>
          <CategorySection >
              <CategoryContainer>
                  <CategoryContainerTitle>
                      <h3>Select your favourite category </h3>
                      <p>Pick a movie from any of the categories. Be sure we've got you covered. </p>
                  </CategoryContainerTitle>
                  <CategoryCardComponent/>
              </CategoryContainer>
              <Glow2/>
          </CategorySection>

      </>
    )
}