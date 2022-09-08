import { useState } from "react";
import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({name, colorBackGround,handleSelectOptions, handleToggleActiveClass}) => {
	const [activeClass, setActiveClass] = useState('')
	const [active, setActive] = useState(true)
	const [option, setOption] = useState(null)

	const handleTogleActive = (e) => {
		setActive(!active)
		if(active){
			setActiveClass('active_option')
			setOption(e.target.name)
			handleSelectOptions(e.target.name)
		}else{
			setActiveClass('')
			setOption(null)
			handleSelectOptions(e.target.name)
		}
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