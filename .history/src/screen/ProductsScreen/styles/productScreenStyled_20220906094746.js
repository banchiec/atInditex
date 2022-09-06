import styled from "styled-components";
export const ContainerProducts =  styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
	@media (min-width:768px){
		border: 1px solid green;
  }
`
export const Filter = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 6em;
`
export const Search = styled.input`
  padding: 30px;
  text-align: end;
  border: none;
  background: whitesmoke;
  border-radius:  7px;
`
