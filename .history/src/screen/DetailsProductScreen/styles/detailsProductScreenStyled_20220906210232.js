import styled from 'styled-components'
export const ContainerDetails = styled.div`
	border: 1px solid green;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width:768px){
		play: flex;
		flex-direction: row;

		height: 90vh;
		div {
		}
	}
`
export const Details = styled.ul`
	border: 1px solid green;
	padding: 15px;
	font-size: 1.1em;
	@media (min-width:768px){
		border: none;
		border-radius: 5px;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		span{
			color: gray;
		}
	}
`
export const DetailsItem = styled.li`
	list-style: none;
`
export const Actions = styled.div`
	@media (min-width:768px){
		display: flex;
		flex-direction: column;
		border-radius: 5px;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		h1{
			padding: 0;
			margin: 0;
		}
		margin: 0;
	}
`
export const ContainerImage = styled.div`
	@media (min-width:768px){
		display: flex;
		flex-direction: column;
		margin-right: 10px;
		width: 15vw;
	}
`
export const ContainerDescription = styled.div`
	border: 1px solid green;
	display: flex;
	flex-direction: column;
	@media (min-width:768px){
		width: 30vw;
		margin-left: 10px;
		display: flex;
		flex-direction: column;
	}
`
export const ListCharacters = styled.div`
	/* border: 1px solid green; */
`

export const ButtonDescription = styled.div`
	@media(min-width:768px){
		height: 10px;
		background-color: ${ prop => prop.colorBackGround};
	}
`
