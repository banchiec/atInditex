import { useState } from "react";
import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({name, colorBackGround,handleSelectOptions}) => {
	console.log(colorBackGround);
	const [activeClass, setActiveClass] = useState('')
	const [active, setActive] = useState(false)
	const [option, setOption] = useState(null)

	const handleTogleActive = (e) => {
		setActive(!active)
		active ? setActiveClass('active_option') : setActiveClass('')
		active ? setOption(e.target.name): setOption(null)
	}

	return(
		<Button
			colorBackGround={colorBackGround}
			onClick={() =>handleTogleActive()}
			className={activeClass}
			name={name}
		>
			{name}
		</Button>
	)
}
export default ButtonOptions