import { Modal, ModalText } from "./cartAlertStyled"
import {AiFilCloseCircle, AiOutlineClose} from 'react-icons/ai'

const CartAlert = ({text}) => {
	return(
		<Modal>
			<AiOutlineClose/>
			<ModalText>
				{text}
			</ModalText>
		</Modal>
	)
}
export default CartAlert