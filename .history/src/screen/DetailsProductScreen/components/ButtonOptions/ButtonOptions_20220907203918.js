import { useState } from "react";
import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({item, colorBackGround,handleSelectOptions, handleToggleActiveClass}) => {
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
			className={item.active == false? '': 'active_option'}
			name={item.name}
		>
			{item.active}
		</Button>
	)
}
export default ButtonOptions