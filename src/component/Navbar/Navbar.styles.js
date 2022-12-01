import styled from "styled-components"

export const Navigation = styled.nav
`
  height: 10vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8px );
  -webkit-backdrop-filter: blur( 3px );
  img{
    width: 128px;
    height: 40px;
  }
  
  h1{
    font-size: 1.4rem;
  }
  
  ul{
    list-style: none;
    display: flex;
    gap:30px;
  }
  a{
    color: var(--offWhite);
    font-size: 14px;
  }
  .hamburger{
    display: none;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  &>div{
    margin-right: 10px;
  }
`
export const RotateIcon = styled.div`
  transition: 0.70s;
  
  &:hover{
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


