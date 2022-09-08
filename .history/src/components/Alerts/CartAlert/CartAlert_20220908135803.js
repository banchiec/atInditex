import { Modal } from "./cartAlertStyled"

const CartAlert = ({text}) => {
	return(
		<Modal>
			<h2>{text}</h2>
		</Modal>
	)
}
export default CartAlert