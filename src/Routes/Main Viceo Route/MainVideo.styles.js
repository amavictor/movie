import styled from "styled-components";

export const VideoBody = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, rgba(42, 42, 42, 0.9), rgba(63, 63, 63, 0.2)), url(${props => props.backDrop});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 100;
  position: absolute;
`
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10%;
  height: 92vh;
  margin-right: 10%;
`
export const FirstDivision = styled.div`
  height: inherit;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 50px;
  flex-basis: 500px;
  flex-grow: 1;
  flex-shrink: 1;
  
`
export const Details = styled.div`
  h3{
    font-size: 3rem;
    margin-bottom: 0;
  }
  p{
    margin-bottom: 0;
    margin-top: 10px;
  }
  
`
export const MainVideoCarouselContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width:100%;
  height: 200px;
  -webkit-overflow-scrolling: touch;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
  h4{
    position: absolute;
    top: 38%;
    display: inline-block;
    font-size: 16px;
    color: var(--red);
    &:hover{
      cursor: pointer;
    }
  }
`
export const MainVideoCarouselCard = styled.div`
  width: 300px;
  height: 150px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0,  0.3)), url(${props => props.backDrop});
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  margin-right: 20px;
  position: relative;
  &:hover{
    cursor: pointer;
    -webkit-filter: brightness(70%);
    -webkit-transition: all .4s ease;
    -moz-transition: all .4s ease;
    -o-transition: all .4s ease;
    -ms-transition: all .4s ease;
    transition: all .4s ease;
  }
  p{
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    max-width: 30%;
    font-size: 12px;
  }
`
export const RatingMain =styled.div`
  height: 70px;
  width: 60px;
`
export const RatingContainerMain = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
`
export const DetailsSlider =styled.div`
  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8px );
  -webkit-backdrop-filter: blur( 5.5px );
  flex-basis:  400px;
  height: 97vh;
  flex-grow: 2;
  flex-shrink: 2;
  margin-right: -12.4% !important;
  position: relative;
  z-index: 30;
  margin-top: -70px;
  margin-left: 30px;
  padding-top: 20px;
  padding-right: 30px;
  padding-left: 30px;
  overflow-y: auto;
  hr{
    margin: 30px 0 30px 0;
  }
  div:nth-child(1){
    display: flex;
    justify-content: flex-end;
  }
  div:nth-child(3){
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p{
    font-size: 14px;
    font-weight: 200;
    line-height: 1.5;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  
  
  img{
    width: 400px;
    height: 500px;
    object-fit: cover;
    object-position: 40% 10%;
  }

`

export const MovieDetails = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  p{
    font-size: 12px;
    padding: 7px 30px;
    border: 2px solid white;
    background: transparent;
    border-radius: 40px;
    transition: all .3s ease-in-out;
    &:hover{
      background: rgba( 255, 255, 255, 0.2 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 8px );
      -webkit-backdrop-filter: blur( 3px );
    }
  }
  div{
    p{
      font-size: 14px;
    }
  }
`
export const ProductionCompany = styled.div`
  img{
    width:100px;
    height: 100px;
    object-fit: contain;
  }
`
export const VideoSneak = styled.div`
  width: 100% !important;
  height: 100vh;
  position: absolute;
  z-index: -200;
  object-fit: contain;
  
`
export const VideoBodyHolder = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  
`
export const RotateIconX = styled.div`
  transition: 0.70s;

  &:hover {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
    transition: 0.70s;
    -webkit-transition: 0.70s;
    -moz-transition: 0.70s;
    -ms-transition: 0.70s;
    -o-transition: 0.70s;
    cursor: pointer;
  }
  
`
export const MovieVideo = styled.div`
  width: 300px;
  height: 250px;
  margin-right: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  p{
    display: block;
  }
`
export const MovieVideos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
