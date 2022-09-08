import { useState } from "react";
import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({name, colorBackGround,handleSelectOptions}) => {
	console.log(colorBackGround);
	const [active, setActive] = useState('')
	const handleTogleActive = (e) => {

		setActive('active_option')
	}

	return(
		<Button
			onClick={(e) => handleSelectOptions(e)}
			colorBackGround={colorBackGround}
			onClick={(e) =>handleTogleActive(e)}
			className={active}
			name={name}
		>
			{name}
		</Button>
	)
}
export default ButtonOptions