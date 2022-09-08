import styled from "styled-components";
export const ContainerProducts =  styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  /* flex-direction: row;
  justify-content: center;
  flex-wrap: wrap; */
	@media (min-width:768px){
  }
`
export const Filter = styled.div`
  @media (min-width:768px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:  15px 0;
    margin: 0 6em;
  }
`
export const Search = styled.input`
	@media (min-width:768px){
    text-align: end;
    border: none;
    background: whitesmoke;
    border-radius:  5px;/* border: 1px solid green; */
  }
`
