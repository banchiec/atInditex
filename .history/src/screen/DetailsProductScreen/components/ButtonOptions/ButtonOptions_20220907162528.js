import { useEffect, useState } from "react";
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
		}else{
			setActiveClass('')
			setOption(null)
		}
		active ? handleSelectOptions(e.target.name) : handleSelectOptions(null)
	}
	console.log(option);

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