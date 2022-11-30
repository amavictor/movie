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
  background-color: aliceblue;
  
`
export const VideoPlayer = styled.div`
  background-color: green;
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 14px;
  iframe{
    transition: all .8s ease;
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
    cursor: pointer;
    ${ImageDown}{
      img:nth-child(1){
        height: 300px;
        filter: brightness(40%);
      }
      img:nth-child(2){
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
    ${VideoApp}{
      width: 500px;
      height: 300px;
      z-index: 40;
      border: 2px solid var(--red);
      border-radius: 14px ;
    }
    ${VideoPlayer}{
      iframe{
        width: 500px;
        height: 300px;
      }
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

