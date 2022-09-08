import { Modal, ModalText } from "./cartAlertStyled"

const CartAlert = ({text}) => {
	return(
		<Modal>
			<ModalText>
				{text}
			</ModalText>
		</Modal>
	)
}
export default CartAlert