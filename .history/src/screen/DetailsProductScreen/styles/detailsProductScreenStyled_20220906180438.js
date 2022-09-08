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
		width:  180px;
	}
	@media (min-width:768px){
		display: flex;
		flex-direction: row;
		div {
			display: flex;
			flex-direction: column;
		}
	}
`
export const Details = styled.ul`
	border: 1px solid green;
	height: 100vh;
	padding: 15px;
`
export const DetailsItem = styled.li`
	list-style: none;
`
export const Actions = styled.div`
	border: 1px solid green;
`