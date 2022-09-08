import { Button, CloseIcon, Modal, ModalText } from "./alertStorageStyled"
import { AiOutlineCloseCircle} from 'react-icons/ai'
import { useEffect } from "react"
import { getProducts } from "../../../utils/products/products.utils"
import { Link } from "react-router-dom"

const AlertStorage = ({text, handleCloseAlert, handleCloseAlertAdd, alertAdd, handleLoadProductStorage}) => {

	useEffect(() => {
		if(alertAdd){
			setTimeout(() => {
				handleCloseAlertAdd()
			},2000)
		}
	},[])

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
					<Button onClick={(e) =>handleCloseAlert(e)}>Recargar</Button>
				</Link>
			)}
		</Modal>
	)
}
export default AlertStorage
