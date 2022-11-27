import styled from "styled-components"
import Modal from "styled-react-modal";

export const MovieCardContainer = styled.div`
  text-align: center;
  background-color: transparent;
  transition: all .2s ease-in-out;
  &:hover{
    transform: scale(1.1);
    cursor: pointer;
  }
  img{
    width: 200px;
    height: 300px;
    object-fit: cover;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: center;

    p{
      font-size: clamp(12px, 13px, 14px);
      color: white;
      width: 70%;
      align-self: center;
          
    }
  }
  
`

export const BackDrop = styled.div`
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0,  0.3)), url(${props => props.backDrop});
      background-repeat: no-repeat;
      background-size: cover;
      height: 45vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      h5{
        font-size: 24px;
      }
      p{
        line-height: 1.5;
        font-size: 14px;
      }
      img{
        width: 170px;
        height: 200px;
        object-fit: cover;
      }
    `



export const StyledModal = Modal.styled`
      width: 50%;
      height: fit-content;    
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
export const Trailer = styled.div`
  &:hover{
    cursor: pointer;
  }
`
export const ModalDetails = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      margin: 100px 60px 40px 60px;

`
export const Rating = styled.div`
      display: flex;
      gap: 20px;
      width: 110px;
      height: 50px;
      align-items: center;
      justify-content: center;
`
export const RatingContainer = styled.div`
    display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
`
export const ReleaseDate = styled.div`
      p:nth-child(1){
            font-weight: 800;
            font-size: 13px;
            line-height: 0;
      }
      p:nth-child(2){
            font-size: 12px;
            text-align: center;
            text-decoration: underline;
      }
      
`
export const LikeAndTrailer = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding:10px 60px;
      
      &>div{
            display: flex;
            gap: 30px;
            
            &>div{
                  &:hover{
                        cursor: pointer;
                  }
            }
            
            a{
                  color: white;
                  transition: all .2s ease-in-out;
                  &:hover{
                        color: var(--red);
                  }
            }
      }
`