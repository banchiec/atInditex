import styled from "styled-components";

export const Card = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	padding: 2.4em  0;
	margin: 2em;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border-radius: 7px;
	a {
		text-decoration: none;
		color: black;
	}
	div{
		text-align: center;
	}
	img{
		margin: 0px;
	}
	h4{
		font-size: 1.5em;
	}
	article {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		.card_brand{
			margin: 0;
		}
		p {
			padding: 4px 0;
			margin: 0px;
		}
		span{
			font-weight: 500;
		}
	}
	@media (min-width:768px){
		/* width: 20%; */
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
`
