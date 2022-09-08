import { useState } from "react";
import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({name, colorBackGround,handleSelectOptions}) => {
	console.log(colorBackGround);
	const [activeClass, setActiveClass] = useState('')
	const [active, setActive] = useState(false)

	const handleTogleActive = (e) => {
		setActive(!active)
		active ? setActiveClass('active_option') : setActiveClass('')
	}

	return(
		<Button
			colorBackGround={colorBackGround}
			onClick={(e) =>handleTogleActive(e)}
			className={activeClass}
			name={name}
		>
			{name}
		</Button>
	)
}
export default ButtonOptions