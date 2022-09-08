import styled from 'styled-components'
export const ContainerDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width:768px){
		display: flex;
		flex-direction: row;
		height: 90vh;
		.active {
			background-color:  #ffaaba;
			color: white;
		}
	}
`
export const Container = styled.div`
	@media (min-width:768px){
		display: flex;
		flex-direction: row;
	}
`
export const Details = styled.ul`
	font-size: 1.1em;
	@media (min-width:768px){
		padding: 15px;
		margin: 0;
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
		margin-top: 1em;
		border-radius: 5px;
		padding: 15px;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		h1{
			padding: 0;
			margin: 0;
		}
	}
`
export const ContainerImage = styled.div`
	@media (min-width:768px){
		display: flex;
		flex-direction: column;
		height: 400px;
		margin-right: 2em;
		cursor: pointer;
		width: 18vw;
		:hover,:focus {
			transform: translateY(-1.3px);
		}
	}
`
export const ContainerDescription = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width:768px){
		width: 40vw;
		margin-left: 10px;
		display: flex;
		flex-direction: column;
	}
`
export const ListCharacters = styled.div`
`

export const ButtonDescription = styled.button`
	@media(min-width:768px){
		width: 50px;
		height: 50px;
		margin: 8px;
		text-align: center;
		border: 1px solid #b5b5b5;
		cursor: pointer;
		border-radius:  10px;
		background-color: ${ prop => prop.colorBackGround};
		:hover,:focus {
			transform: translateY(-1.3px);
		}
	}
`
export const ContainerOptions = styled.div`
	@media (min-width:768px){
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding: 15px;
	}
`
export const ContainerSelector = styled.div`
	@media (min-width:768px){
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding: 10px;
	}
`
export const Selector = styled.button`
	@media (min-width:768px){
		padding: 10px;
		border-radius: 10px;
		border: none;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		margin: 0 10px;
		cursor: pointer;
		:hover,:focus {
			transform: translateY(-1.3px);
		}
	}
`

export const Button= styled.button`
	@media (min-width:768px){
		border-radius: 5px;
		border: 1px solid gray;
		cursor: pointer;
		border-top: 2em;
		padding: 10px;
		:hover,:focus {
			transform: translateY(-1.3px);
		}
	}
`