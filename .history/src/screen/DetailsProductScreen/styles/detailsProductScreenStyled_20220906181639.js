import styled from 'styled-components'
export const ContainerDetails = styled.div`
	border: 1px solid green;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid green;

	img{
		border: 1px solid green;
	}
	@media (min-width:768px){
		display: flex;
		flex-direction: row;
		height: 90vh;
		img {
			/* height: 30vh; */
		}
		div {
			border: 1px solid green;
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
`
export const DetailsItem = styled.li`
	list-style: none;
`
export const Actions = styled.div`
	border: 1px solid green;
`