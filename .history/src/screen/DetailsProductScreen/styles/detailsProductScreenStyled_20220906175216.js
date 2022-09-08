import styled from 'styled-components'
export const ContainerDetails = styled.div`
	border: 1px solid green;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	img{
		width:  180px;
	}
	@media (min-width:768px){
		display: flex;
		flex-direction: row;
		div {
			display: flex;
			flex-direction: row;
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