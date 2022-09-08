import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({key, colorBackGround,handleSelectOptions}) => {
	console.log(key);
	return(
		<Button>
			{key}
		</Button>
	)
}
export default ButtonOptions