import styled, {keyframes} from "styled-components"
import Modal from "styled-react-modal";

//slider animation variable
const slide = keyframes`
  0%{
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0,  0.2)), url("https://wallpapercave.com/wp/wp8592139.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  20%{
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0,  0.2)), url("https://wallpapercave.com/wp/wp8592139.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  20.01%{
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0,  0.2)), url("https://www.wallpaperflare.com/static/527/639/639/edge-of-tomorrow-tom-cruise-emily-blunt-movie-poster-wallpaper.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  40%{

    background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0,  0.2)), url("https://www.wallpaperflare.com/static/527/639/639/edge-of-tomorrow-tom-cruise-emily-blunt-movie-poster-wallpaper.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    
  }
 
  40.01%{
    background: linear-gradient(to right, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0,  0.2)), url("http://images5.fanpop.com/image/photos/32000000/Looper-Movie-Poster-looper-32031468-2560-1920.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  60%{
    background: linear-gradient(to right, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0,  0.2)), url("http://images5.fanpop.com/image/photos/32000000/Looper-Movie-Poster-looper-32031468-2560-1920.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  60.01%{
    
    background: linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0,  0.2)), url("https://wallpapercave.com/wp/wp9424755.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  80%{
    background: linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0,  0.2)), url("https://wallpapercave.com/wp/wp9424755.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  80.01%{
    background: linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0,  0.2)), url("https://ocdn.eu/pulscms-transforms/1/k_YktkpTURBXy8yZTAwOTIzNDdmNmRiNTVkOWZlNWZkMzY2YmU1MDc5Mi5qcGeSlQMAzN7NBDjNAl-TBc0EsM0Cdg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  90%{
    background: linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0,  0.2)), url("https://ocdn.eu/pulscms-transforms/1/k_YktkpTURBXy8yZTAwOTIzNDdmNmRiNTVkOWZlNWZkMzY2YmU1MDc5Mi5qcGeSlQMAzN7NBDjNAl-TBc0EsM0Cdg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  90%{
    background: linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0,  0.2)), url("https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/06389b47-0468-4f3c-8bf3-28f9ee07e076/2022.WarnerBros-BlackAdam-WebHP.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  90.01%{
    background: linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0,  0.2)), url("https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/06389b47-0468-4f3c-8bf3-28f9ee07e076/2022.WarnerBros-BlackAdam-WebHP.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  100%{
    background: linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0,  0.2)), url("https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/06389b47-0468-4f3c-8bf3-28f9ee07e076/2022.WarnerBros-BlackAdam-WebHP.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
`;


export const Background = styled.div`
  overflow-x: hidden;
  height: 100vh;
  /*background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 2%, rgba(0, 0, 0,  0.2)), url("../../assests/images/avatar.jpg");*/
  animation: ${slide} 30s infinite ease-in-out;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  
  .black{
    /*background:  linear-gradient(to top, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0,  0));*/
    height: 20vh;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .purple{
    
  }
`

export const Line = styled.div`
  width: 300px;
  background-color: white;
  height: 2px;
  
`

export const Intro = styled.div`
  margin-top: 150px;
  h5{
    font-size: 1.5rem;
    position: relative;
    
    &::after{
      content: "";
      position: absolute;
      margin-top: 20px;
      display: block;
      height: 2px;
      background: var(--offWhite);
      width: 400px;
    }
  }
  div{
    h2{
      font-size: 5.5rem;
      max-width: 60%;
      margin-bottom: 0;
    }
    p{
      line-height: 2;
    }
  }
`
export const ButtonHolder = styled.div`
  display: flex;
  gap: 40px;
`
export const HomeSliderContainer = styled.div`
  text-align: center;
`
export const Trending = styled.section`
  position: relative;
  padding-top: 10%;
`
export const UpcomingMovies =styled.div`
  position: relative;
  margin-top: -30px;
`
export const Glow = styled.div`
  /* 01 */

  position: absolute;
  width: 1086px;
  height: 1085px;
  opacity: 0.4;
  z-index: -20;

  /* 2 */

  left: -20%;
  right: 5.04%;
  top: 30.47%;
  bottom: 1.41%;
  z-index: -20;

  background: linear-gradient(135deg, #000CFF 2.88%, #5E05FF 36.12%, #A600FF 98.14%);
  filter: blur(140px);

`
export const Glow2 = styled.div`
  /* 3 */

  position: absolute;
  width: 1124px;
  height: 1124px;
  opacity: 0.4;


  /* 2 */
  
  right: 0;
  bottom: -100%;
  z-index: -20;
  background: linear-gradient(135deg, #FF000F 2.88%, #5200FF 98.14%);
  filter: blur(140px);

`
export const CategorySection = styled.div`
  position: relative;
`
export const SnapContainer = styled.div`
  scroll-snap-type: y mandatory ;
  overflow-y: scroll;
  height: 100vh;
  
  section{
    height: 100vh;
    scroll-snap-align: start;
  }
`
export const CategoryContainer = styled.div`
  margin: 0 10%;
`
export const CategoryContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10%;
  width: 100%;
  h3{
    font-size: 3.5rem;
    max-width: 50%;
  }
  p{
    color: gray;
    max-width: 30%;
    font-size: 1.2rem;
  }
`

export const TrendingElements = styled.div`
  margin: 3% 10% ;
  display: flex;
  flex-wrap: wrap;
`
export const TrendingWeek = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0% 10%;
  h3{
    font-size: 2.5rem;
  }
  
    div{
      margin-left: 138px;
      display: flex;
      h4{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        margin-right: 50px;
        &:hover{
          cursor: pointer;
          
        }
      }
    }
`
export const HomeSlider2Container =styled.div`
  width: 100%;
`

export const StyledModalHome = Modal.styled`
      width: 80vw;
      height: 70vh;    
       color: white;
      background-color: var(--backgrouColor);
      opacity: ${(props) => props.opacity};
      transition : all 0.3s ease-in-out;
      animation: 3s ease-in-out 0s both example;
      border-radius: 12px;
      p{
        font-size: 12px;
      }
      
      @keyframes example {
      from {box-shadow: -1px -1px 53px 19px rgba(251,37,118,0);
      -webkit-box-shadow: -1px -1px 53px 19px rgba(251,37,118,0);
      -moz-box-shadow: -1px -1px 53px 19px rgba(251,37,118,0);}
      to {box-shadow: -1px -1px 53px 19px rgba(251,37,118,0.22);
      -webkit-box-shadow: -1px -1px 53px 19px rgba(251,37,118,0.22);
      -moz-box-shadow: -1px -1px 53px 19px rgba(251,37,118,0.22);}
      }
      `