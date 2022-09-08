import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({name, colorBackGround,handleSelectOptions}) => {
	console.log(colorBackGround);

	return(
		<Button
			onClick={(e) => handleSelectOptions(e)}
			colorBackGround={colorBackGround}
			name={name}
		>
			{name}
		</Button>
	)
}
export default ButtonOptions