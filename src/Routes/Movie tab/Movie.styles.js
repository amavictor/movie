import styled from "styled-components"
import {Link} from "react-router-dom";

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: clamp(14px,2vw,18px);
  font-weight: 600;
  padding: 10px 20px;
  width: 100px;
  background-color: var(--red);
  margin-right: 50px;
  border-radius: 12px;
`
export const Title = styled.h2`
  font-size: clamp(12px, 4vw, 40px);
`

export const MovieNavContainer = styled.div`
  height: fit-content;
  padding-bottom: 50px;
`