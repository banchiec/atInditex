import { Button, CloseIcon, Modal, ModalText } from "./alertStorageStyled"
import { AiOutlineCloseCircle} from 'react-icons/ai'
import { useEffect } from "react"

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
				<Button onClick={(e) =>handleCloseAlert(e)}>Cerrar</Button>
			)}
		</Modal>
	)
}
export default AlertStorage
