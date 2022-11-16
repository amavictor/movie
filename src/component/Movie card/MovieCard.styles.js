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
export const StyledModal = Modal.styled`
      width: 50%;
      height: fit-content;    
       color: white;
      background-color: var(--backgrouColor);
      opacity: ${(props) => props.opacity};
      transition : all 0.3s ease-in-out;
      p{
        font-size: 12px;
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