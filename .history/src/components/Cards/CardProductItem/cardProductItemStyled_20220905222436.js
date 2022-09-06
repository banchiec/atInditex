import styled from "styled-components";

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	padding: 2.4em  0;
	/* margin: 2em; */
	box-shadow: 19px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border-radius: 4px;
	div{
		text-align: center;
	}
	img{
		width: 180px;
		margin: 0px;
	}
	article {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		/* padding: 10px; */
		border: 1px solid green;
		p{
			padding: 0px;
			border: 1px solid green;
			border: 0px;
		}
		.card_brand{
		}
	}
	@media (min-width:768px){
		width: 20%;
	}
`
