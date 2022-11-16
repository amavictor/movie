import {Navbar} from "../../component/Navbar/Navbar";
import {Button} from "../../component/Button/Button";
import {
    Background,
    ButtonHolder, CategoryCardsContainer,
    CategoryContainer, CategoryContainerTitle, HomeSlider2Container,
    HomeSliderContainer,
    Intro,
    Line,
    SnapContainer,
    Trending, TrendingDay, TrendingWeek
} from "./Home.styles";
import{HomeSlider} from "../../component/Slider/HomeSlider";
import {motion} from "framer-motion";
import {CategoryCardComponent} from "../../component/Category card home/CategoryCard.component";
import {HomeSlider2} from "../../component/Slider/HomeSlider2";

export const Home = () => {
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
            </Background>
        </header>
          <Trending className={"padding"}>
              <TrendingWeek>
                  <h3>Trending movies this week</h3>
                  <motion.div
                      drag
                      dragConstraints={{right:5,left:10,top:5,bottom:1}}
                      dragTransition={{ bounceStiffness: 400, bounceDamping:50}}
                      dragElastic={0.1}
                      className={"motion"}
                  >
                      <HomeSliderContainer>
                          <HomeSlider/>
                      </HomeSliderContainer>
                  </motion.div>
              </TrendingWeek>

              <TrendingDay>
                  <h3>Trending movies today</h3>
                  <HomeSlider2Container>
                      <HomeSlider2/>
                  </HomeSlider2Container>
              </TrendingDay>
          </Trending>
          <section className={"padding"}>
              <CategoryContainer>
                  <CategoryContainerTitle>
                      <h3>Select your favourite category </h3>
                      <p>Pick a movie from any of the categories. Be sure we've got you covered. </p>
                  </CategoryContainerTitle>
                  <CategoryCardComponent/>
              </CategoryContainer>

          </section>

      </>
  )
}