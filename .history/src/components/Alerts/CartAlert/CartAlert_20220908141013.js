import { CloseIcon, Modal, ModalText } from "./cartAlertStyled"
import { AiOutlineCloseCircle} from 'react-icons/ai'

const CartAlert = ({text}) => {
	return(
		<Modal>
			<CloseIcon>
				<AiOutlineCloseCircle/>
			</CloseIcon>
			<ModalText>
				{text}
			</ModalText>
		</Modal>
	)
}
export default CartAlert