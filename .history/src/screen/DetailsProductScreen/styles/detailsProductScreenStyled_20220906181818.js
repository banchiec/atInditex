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
`
export const DetailsItem = styled.li`
	list-style: none;
`
export const Actions = styled.div`
	border: 1px solid green;
`