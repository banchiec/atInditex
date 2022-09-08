import { useState } from "react";
import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({name, colorBackGround,handleSelectOptions}) => {
	console.log(colorBackGround);
	const [active, setActive] = useState('')
	const handleChangeActive = () => {
		setActive('active')
	}

	return(
		<Button
			onClick={(e) => handleSelectOptions(e)}
			colorBackGround={colorBackGround}
			className={handleChangeActive}
			name={name}
		>
			{name}
		</Button>
	)
}
export default ButtonOptions