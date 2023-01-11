import styled from "styled-components"
import {Glow, Glow2} from "../Home/Home.styles";

export const LoginBackground = styled.main`
  overflow-y: hidden;
  height: 100vh;
`
export const LoginGlow = styled(Glow)`
  width: 80vw;
  height: 50vh;
`
export const LoginGlow2 = styled(Glow2)`
  top:0;
  width: 70vw;
  height: 60vh;
`
export const LoginSignUPContainer=styled.section`
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.4px);
  -webkit-backdrop-filter: blur(4.4px);
  height: 90vh;
  width: 90vw;
  margin: 5vh auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p{
    font-size: 0.8rem;
    color: white;
    font-weight: normal;
    
  }
  i{
    font-weight: 500;
    :hover{
      cursor: pointer;
    }
  }
  button{
    font-size: 1rem;
    img{
      width: 18px;
      height: 18px;
      margin-left: 20px;
    }
  }
  
`