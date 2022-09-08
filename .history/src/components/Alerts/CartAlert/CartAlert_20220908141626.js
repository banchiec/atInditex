import { CloseIcon, Modal, ModalText } from "./cartAlertStyled"
import { AiOutlineCloseCircle} from 'react-icons/ai'

const CartAlert = ({text, handleCloseAlert}) => {
	return(
		<Modal>
			<CloseIcon onClick={(e) => handleCloseAlert(e)}>
				Cerrar
				<AiOutlineCloseCircle/>
			</CloseIcon>
			<ModalText>
				{text}
			</ModalText>
		</Modal>
	)
}
export default CartAlert