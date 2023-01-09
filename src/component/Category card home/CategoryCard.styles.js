import styled from "styled-components"
export const CategoryCardBody= styled.div`
  background-color: var(--catCard) ;
  color: var(--red);
  width: 150px;
  height: 100px;
  border-radius: 15px;
  text-align: center;
  padding:4px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease;
  
  &:hover{
    background-color: var(--red);
    cursor: pointer;
    h5,p{
      color: white;
    }
  }
  
  h5{
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  p{
    font-size: 1.2rem;
    font-weight: 600;
  }
  *{
    margin: 0;
  }
@media (max-width: 768px){
  h5{
    font-size: 1.2rem;
  }
  p{
    font-size: .9rem;
  }
  width: 120px;
  height: 80px;
}
`
export const CategoryCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  row-gap: 40px;
  column-gap: 50px;
`