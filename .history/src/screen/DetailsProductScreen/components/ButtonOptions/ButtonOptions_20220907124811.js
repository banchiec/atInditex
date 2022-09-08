import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({name, colorBackGround,handleSelectOptions}) => {
	console.log(colorBackGround);
	return(
		<Button
			colorBackGround={colorBackGround}>
			{name}
		</Button>
	)
}
export default ButtonOptions