import styled from "styled-components"

export const SliderCards = styled.div`
  width: fit-content;
  text-align: center;
  position: relative;
  padding: 2px 7px 7px 7px;
  &:hover {
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    transition: all .5s ease-in;
    
    p{
      font-size: 13px;
      transition: all .5s ease;
    }
    
    & img{
      transform: scale(0.96);
      transition: all .5s ease;
      filter: brightness(50%);
    }
    
    .lift{
      transform: translateY(-120px);
      transition: .5s;
      p{
        opacity: 1;
        transition: all .5s ease;
      }
      button{
        opacity: 1;
        transition: all .5s ease;
      }
    }
    
   
    
  }


  img{
      width: 200px;
      height: 300px;
      object-fit: cover;
      border-radius: 9px ;
      box-shadow: 6px 6px 10px -3px rgba(0,0,0,0.31);
      -webkit-box-shadow: 6px 6px 10px -3px rgba(0,0,0,0.31);
      -moz-box-shadow: 6px 6px 10px -3px rgba(0,0,0,0.31);
    }
  p{
  margin: 6px auto 15px auto;
  line-height: 1;
  max-width: 12em;
  font-size: 15px;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
    
`
export const HomeCircular =styled.div`
  width: 40px;
  height: 40px;
`
export const Pg = styled.div`
  padding: 3px 5px; 
  border: 2px solid white;
  font-size: 10px;
  border-radius:9px;
  
`
export const HoverDetails = styled.div`
  .lift{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    bottom: 0;
    z-index: 10;
    transition: transform 1s ease;

   
    p{
      margin-top: 80px;
      opacity: 0;
      
    }

    button{
      margin-bottom: 30px;
      color: white;
      padding: 10px 12px;
      font-weight: 200;
      border-radius: 9px;
      border: 1px solid white;
      opacity: 0;
      &:hover{
        cursor: pointer;
        filter: brightness(70%);
      }

    }
    button:nth-child(2){
      background-color: var(--red);
      border: none;
    }
    button:nth-child(3){
      background-color: transparent;
    }
  }
  
`
