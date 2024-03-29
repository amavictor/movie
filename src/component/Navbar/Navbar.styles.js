import styled from "styled-components"

export const Navigation = styled.nav
`
  height: 10vh;
  display: flex;
  flex-wrap: wrap;
  position:relative;
  z-index:5;
  align-items: center;
  justify-content: space-between;
  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8px );
  -webkit-backdrop-filter: blur( 3px );
  img{
    width: 128px;
    height: 40px;
    &:hover{
      cursor:pointer;
    }
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

export const NotificationContainer = styled.div`
  position: relative;
  
  div{
    background-color: var(--red);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    p{
      align-self: center;
      font-size: 10px;
      color: white;
      font-weight: 500;
    }
  }
`
export const UserSignOutComponent = styled.div`
  position: relative;
  :hover{
    cursor: pointer;
  }
`
export const SignOutDropDown = styled.div`
    position: absolute;
  width: 5rem;
  height: 3rem;
  padding: 0.1rem 1rem;
  background-color: black;
  p{
    color: white;
  }
  
`
