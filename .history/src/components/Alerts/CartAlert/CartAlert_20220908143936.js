import { Button, CloseIcon, Modal, ModalText } from "./cartAlertStyled"
import { AiOutlineCloseCircle} from 'react-icons/ai'

const CartAlert = ({text, handleCloseAlert}) => {
	return(
		<Modal>
			<CloseIcon onClick={(e) => handleCloseAlert(e)}>
				<AiOutlineCloseCircle/>
			</CloseIcon>
			<ModalText>
				{text}
			</ModalText>
			<Button onClick={(e) =>handleCloseAlert(e)}>Cerrar</Button>
		</Modal>
	)
}
export default CartAlert
