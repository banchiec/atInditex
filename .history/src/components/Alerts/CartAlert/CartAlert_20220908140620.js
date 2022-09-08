import { Modal, ModalText } from "./cartAlertStyled"
import {AiFilCloseCircle} from 'react-icons/ai'

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