import styled from "styled-components"

export const Modal = styled.div`
	position: absolute;
  top: 35%;
  left: 35%;
  height: 200px;
  width: 500px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
  background: white;
`
export const ModalText = styled.h2`
	text-align: center;
	transform: translateY(60px);
`
export const CloseIcon =  styled.button`
	border: none;
	@media (min-width:768px){
		border: none;
		cursor: pointer;
		svg {
			position: absolute;
			right: 15px;
			color: gray;
			font-size: 1.8em;
		}
	}
`
export const Button = styled.button`
	padding: 10px 50px;
  transform: translate(200px, 100px);
  border-radius: 20px;
  font-family: Inria sans;
  font-size: 18px;
  outline: none;
  border: 1px solid white;
  transition:0.2s ease-in-out all;
  cursor:pointer;

`