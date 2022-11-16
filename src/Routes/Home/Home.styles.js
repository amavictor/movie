import styled, {keyframes} from "styled-components"

//slider animation variable
const slide = keyframes`
  0%{
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0,  0.2)), url("https://wallpapercave.com/wp/wp8592139.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  20%{
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0,  0.2)), url("https://wallpapercave.com/wp/wp8592139.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  20.01%{
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0,  0.2)), url("https://www.wallpaperflare.com/static/527/639/639/edge-of-tomorrow-tom-cruise-emily-blunt-movie-poster-wallpaper.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  40%{

    background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0,  0.2)), url("https://www.wallpaperflare.com/static/527/639/639/edge-of-tomorrow-tom-cruise-emily-blunt-movie-poster-wallpaper.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    
  }
 
  40.01%{
    background: linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0,  0.2)), url("http://images5.fanpop.com/image/photos/32000000/Looper-Movie-Poster-looper-32031468-2560-1920.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  60%{
    background: linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0,  0.2)), url("http://images5.fanpop.com/image/photos/32000000/Looper-Movie-Poster-looper-32031468-2560-1920.jpg");
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
export const Trending = styled.div`
  background-color: rgba(0,0,0,0.3);
  
  padding-top: 100px;
  padding-bottom: 100px;
  
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
export const TrendingDay = styled.div`
  margin-top: 200px;
  
  h3{
    font-size: 2.5rem;
    position: relative;
    text-align: left !important;

    &::after{
      content: "";
      width: 20%;
      height: 5px;
      background-color: var(--red);
      position: absolute;
      display: block;
      margin-top: 20px;

    }
  }
`
export const TrendingWeek = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .motion{
      width: 230px;
      position: absolute;
      right: 10%;
      z-index: 2;
    }
    h3{
      font-size: 2.5rem;
      position: relative;

      &::after{
        content: "";
        width: 20%;
        height: 5px;
        background-color: var(--red);
        position: absolute;
        display: block;
        margin-top: 20px;

      }
    }
`
export const HomeSlider2Container =styled.div`
  width: 100%;
`