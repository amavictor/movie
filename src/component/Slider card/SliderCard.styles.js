import styled from "styled-components"

export const SliderCards = styled.div`
  
    width: fit-content;
  padding: 10px 15px;
    text-align: center;
    background-color: gray;
  border-radius: 14px;
  box-shadow: 9px 8px 18px -1px rgba(0,0,0,0.56);
  -webkit-box-shadow: 9px 8px 18px -1px rgba(0,0,0,0.56);
  -moz-box-shadow: 9px 8px 18px -1px rgba(0,0,0,0.56);
    img{
      width: 200px;
      height: 300px;
      object-fit: cover;
      border-radius: 14px ;
      box-shadow: 6px 6px 10px -3px rgba(0,0,0,0.31);
      -webkit-box-shadow: 6px 6px 10px -3px rgba(0,0,0,0.31);
      -moz-box-shadow: 6px 6px 10px -3px rgba(0,0,0,0.31);
    }
    p{
      margin: 6px auto 6px auto;
      line-height: 1;
      max-width: 7em;
      &:nth-child(3){
        font-size:10px ;
      }
    }
    
`
