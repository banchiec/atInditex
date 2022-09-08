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
	svg {
		position: relative;
		right: 4px ;
	}
`
export const ModalText = styled.h2`
	text-align: center;
	transform: translateY(60px);
`