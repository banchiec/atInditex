import styled from 'styled-components'
export const Button = styled.button`
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
		.active_option {
			border: 4px solid green;
			transform: translateY(-1.3px);
		}
		.no-active {
			border: none;
		}
		
	}
`