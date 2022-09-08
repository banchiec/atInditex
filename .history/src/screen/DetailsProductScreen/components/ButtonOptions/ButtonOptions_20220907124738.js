import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({key, colorBackGround,handleSelectOptions}) => {
	console.log(colorBackGround);
	return(
		<Button
			colorBackGround={colorBackGround}>
			{key}
		</Button>
	)
}
export default ButtonOptions