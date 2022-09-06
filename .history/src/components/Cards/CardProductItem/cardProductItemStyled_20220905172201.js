import styled from "styled-components";

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	padding: 2.4em  0;
	margin: 2em;
	border-radius: 4px;
	border: 1px solid gray;
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
		padding: 10px;
		border: 1px solid green;
		h5{
			text-align: start;
		}
		p{
			padding: 0px;
			border: 1px solid green;
			border: 0px;
		}
		.card_brand{
		}
	}
`