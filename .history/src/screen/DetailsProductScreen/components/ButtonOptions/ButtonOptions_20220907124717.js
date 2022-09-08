import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({key, colorBackGround,handleSelectOptions}) => {
	console.log(colorBackGround);
	return(
		<Button>
			{key}
		</Button>
	)
}
export default ButtonOptions