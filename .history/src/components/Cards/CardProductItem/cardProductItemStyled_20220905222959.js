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
	border-radius: 4px;
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
		border: 1px solid green;
		h5{
			padding: 0px;
			border: 0px;
		}
		.card_brand{
		}
	}
	@media (min-width:768px){
		width: 20%;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
`
