import styled from "styled-components"

export const NowPlayingContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 30px;
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