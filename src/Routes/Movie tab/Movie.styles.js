import styled from "styled-components"
import {Link, NavLink} from "react-router-dom";

export const MovieLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 600;
  padding: 10px 10px;
  background-color: var(--red);
  margin-right: 50px;
  border-radius: 12px;
  margin-top: 20px;

  &:hover {
    background-color: #691f3d;
  }
  a .active{
    background-color: #282c34;
  }
`
export const Title = styled.h2`
  font-size: clamp(12px, 4vw, 40px);
`

export const MovieNavContainer = styled.div`
  height: fit-content;
  padding-bottom: 50px;
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`
