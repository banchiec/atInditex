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
  border: 1px solid green;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Search = styled.input`
  padding: 10px;
`
