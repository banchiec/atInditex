import { Modal, ModalText } from "./cartAlertStyled"
import { AiOutlineCloseCircle} from 'react-icons/ai'

const CartAlert = ({text}) => {
	return(
		<Modal>
			<AiOutlineCloseCircle/>
			<ModalText>
				{text}
			</ModalText>
		</Modal>
	)
}
export default CartAlert