import { useEffect, useState } from "react";
import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({item, colorBackGround,handleSelectOptions, handleToggleActiveClass}) => {
	const [activeClass, setActiveClass] = useState('')
	const [active, setActive] = useState(true)
	const [option, setOption] = useState(null)

	const handleTogleActive = (e) => {
		setActive(!active)
		if(active){
			// setActiveClass('active_option')
			// setOption(e.target.name)
			handleSelectOptions(e.target.name)
		}else{
			// setActiveClass('')
			// setOption(null)
			handleSelectOptions(e.target.name)
		}
	}

	console.log(item.active);
	return(
		<Button
			colorBackGround={colorBackGround}
			onClick={(e) =>handleTogleActive(e)}
			className={item?.active === true? 'active_option' : 'no_active'}
			name={item?.name}
		>
			{item.name}
		</Button>
	)
}
export default ButtonOptions