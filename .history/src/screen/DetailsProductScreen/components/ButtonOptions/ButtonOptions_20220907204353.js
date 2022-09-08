import { useEffect, useState } from "react";
import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({item, colorBackGround,handleSelectOptions, handleToggleActiveClass}) => {
	const [activeClass, setActiveClass] = useState('')
	const [active, setActive] = useState(true)
	const [optionCurrent, setOptionCurrent] = useState(null)
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
	useEffect(() => {
		setOptionCurrent(item)
	}, [optionCurrent])

	return(
		<Button
			colorBackGround={colorBackGround}
			onClick={(e) =>handleTogleActive(e)}
			className={optionCurrent?.active === false ? '' : 'active_option'}
			name={optionCurrent?.name}
		>
			{item.name}
		</Button>
	)
}
export default ButtonOptions