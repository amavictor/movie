import styled from "styled-components"
import {Link} from "react-router-dom"

export const Navigation = styled.nav
`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  
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


