import { Button, CloseIcon, Modal, ModalText } from "./alertStorageStyled"
import { AiOutlineCloseCircle} from 'react-icons/ai'
import { useEffect } from "react"
import { getProducts } from "../../../utils/products/products.utils"
import { Link } from "react-router-dom"

const AlertStorage = ({text, handleCloseAlert, alertAdd, handleLoadProductStorage}) => {

	const reloadDate = (e) => {
		getProducts()
		handleCloseAlert()
	  handleLoadProductStorage()
	}

	return(
		<Modal>
			<CloseIcon onClick={(e) => handleCloseAlert(e)}>
				<AiOutlineCloseCircle/>
			</CloseIcon>
			<ModalText>
				{text}
			</ModalText>
			{!alertAdd && (
				<Link to={'/'}>
					<Button onClick={(e) =>reloadDate(e)}>Recargar</Button>
				</Link>
			)}
		</Modal>
	)
}
export default AlertStorage
