import styled from "styled-components"

export const NowPlayingContainer = styled.div`
    display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  @media(max-width: 768px){
    grid-gap: 8px;
    grid-template-columns: repeat(2, 1fr);
  }
`

export const PageButton = styled.div`
  background-color: #696969;
  color: white;
  font-size: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 30px;
  font-weight: 800;

  &:hover {
    cursor: pointer;
    background-color: #5d5d5d;
  }
`
export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`