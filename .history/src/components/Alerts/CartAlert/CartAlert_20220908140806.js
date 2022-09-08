import { Modal, ModalText } from "./cartAlertStyled"
import {AiOutlineClose, AiOutlineCloseCircle} from 'react-icons/ai'

const CartAlert = ({text}) => {
	return(
		<Modal>
			<AiOutlineClose/>
			<AiOutlineCloseCircle/>
			<ModalText>
				{text}
			</ModalText>
		</Modal>
	)
}
export default CartAlert