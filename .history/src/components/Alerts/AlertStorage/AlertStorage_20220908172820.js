import { Button, CloseIcon, Modal, ModalText } from "./alertStorageStyled"
import { AiOutlineCloseCircle} from 'react-icons/ai'
import { useEffect } from "react"
import { getProducts } from "../../../utils/products/products.utils"

const AlertStorage = ({text, handleCloseAlert, handleCloseAlertAdd, alertAdd}) => {

	useEffect(() => {
		if(alertAdd){
			setTimeout(() => {
				handleCloseAlertAdd()
			},2000)
		}
	},[])

	return(
		<Modal>
			<CloseIcon onClick={(e) => handleCloseAlert(e)}>
				<AiOutlineCloseCircle/>
			</CloseIcon>
			<ModalText>
				{text}
			</ModalText>
			{!alertAdd && (
				<Button onClick={(e) =>getProducts()}>Recargar</Button>
			)}
		</Modal>
	)
}
export default AlertStorage