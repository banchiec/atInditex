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
			display: flex;
			width: 20vw;
			margin: 2em;
			flex-direction: column;
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
		border-radius: 5px;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		h1{
			padding: 0;
			margin: 0;
		}
		margin: 0;
	}
`
export const ButtonDescription = styled.div`
	/* border-radius: 50%; */
	width: 4px;
	height: 4px;
	background-color: ${ prop => prop.colorDiv};
	@media(min-width:768px){
		width: 4px;
		height: 4px;
	}
`
