import styled from "styled-components";

export const FooterBackground = styled.div`
  margin: 20% 10%;
  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8px );
  -webkit-backdrop-filter: blur( 3px );
  padding: 50px;
  border-radius: 20px;
  h4{
    font-size: 40px;
  }
  p,li{
    font-size: 14px;
    line-height: 2;
  }
  @media(max-width: 768px){
    h4{
      font-size: 30px;
    }
  }
`
export const TextAndImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between ;
  flex-wrap: wrap;
  
  div:nth-child(1){
    flex: 1;
    img{
      height: 50px;
    }
  }
  
  div:nth-child(2){
    img{
      width: 321px;
      height: 420px;
    }
  }
  @media (max-width: 768px){
    div:nth-child(2){
      img{
        margin-top: 50px;
        width: 300px;
        height: 390px;
      }
    }
  }
`
export const MainFooter = styled.footer`
  position: relative;
`
export const BackLine =styled.div`
  position: absolute;
  width: 100%;
  top: -80px;
  left:0;
  z-index: -40;
  img{
    width: 100%;
  }
`