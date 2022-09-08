import { useEffect, useState } from "react";
import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({name, colorBackGround,handleSelectOptions, handleToggleActiveClass}) => {
	const [activeClass, setActiveClass] = useState('')
	const [active, setActive] = useState(false)
	const [option, setOption] = useState(null)

	const handleTogleActive = (e) => {
		setActive(!active)
		active ? setActiveClass('active_option') : setActiveClass('')
		active ? setOption(e.target.name): setOption(null)
		handleSelectOptions(option)
	}

	return(
		<Button
			colorBackGround={colorBackGround}
			onClick={(e) =>handleSelectOptions(e)}
			className={handleToggleActiveClass()}
			name={name}
		>
			{name}
		</Button>
	)
}
export default ButtonOptions