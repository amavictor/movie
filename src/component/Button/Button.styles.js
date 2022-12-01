import styled, {css} from "styled-components"

export const Buttons = styled.button`
  background-color: transparent;
  color: var(--red);
  border: 2px solid var(--red);
  padding: 10px 20px;
  font-size: 1.5rem;
  position: relative;
  display: inline-block;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  border-radius: 3px;
  @media (max-width: 768px){
    font-size: 1.2rem;
    padding: 5px 10px;
  }

  &::before{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--red);
    transform: translateX(-100%);
    transition: all 0.3s;
    z-index: -1;
    border-radius: 3px;
  }
  &:hover{
    color: white;
    cursor: pointer;
    &::before{
      transform: translateX(0%);
    }
  }
  
  ${
    props=> props.type==="primary" && css`
     color: white;
      background-color: var(--red);
      
    `
  }

  ${
      props=> props.size==="small" && css`
      font-size: 0.8rem;
    `
  }
  
`