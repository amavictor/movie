import styled from "styled-components"



export const ImageDown =styled.div`
    position: relative;
    z-index: 30;
    img{
      width: 100%;
      height: 200px;
      transition: all .3s ease-out;
      opacity: 1;
      object-fit: cover;
      filter: brightness(70%);
    }
  img:nth-child(2){
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 30px;
    left: 20px;
    opacity: 1;
  }
`
export const VideoApp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: all .3s ease;
  width: 100%;
  height: 100%;
  
  div{
    top: 50%;
    left: 50%;
  }
  
`

export const MovieBody =styled.div`
  height: 200px;
  width: 300px;
  background-color: transparent;
  transition: all .3s ease;
  position: relative;
  margin-right: 30px;
  display: inline-block;

  &:hover {
    width: 500px;
    height: 300px;

    ${ImageDown}{
      img:nth-child(1){
        opacity: 0;
        height: 300px;
      }
      img:nth-child(2){
        opacity: 0;
      }
    }
    ${VideoApp}{
      width: 500px;
      height: 300px;
      z-index: 40;
    }
    
  }
`
export const HomeVideoCarouselContainer =styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width:100%;
  height: fit-content;
  -webkit-overflow-scrolling: touch;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`

