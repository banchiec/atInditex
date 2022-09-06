import styled from "styled-components";

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	padding: 2.4em  0;
	border: 1px solid green;
	div{
		text-align: center;
	}
	img{
		width: 180px;
		margin: 0px;
	}
	article {
		display: flex;
		flex-direction: row;
		padding: 10px;
		border: 1px solid green;
	}
`