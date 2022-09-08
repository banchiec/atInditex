import styled from "styled-components";
export const ContainerProducts =  styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  padding: 0 10%;
	@media (min-width:768px){
    grid-template-columns: repeat(4, 1fr);
  }
`
export const Filter = styled.div`
  @media (min-width:768px){
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2em;
    margin: 0 2em;
    h4{
      padding: 10px;
      margin: 0;
    }
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
