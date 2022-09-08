import { useEffect, useState } from "react";
import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({item, colorBackGround,handleSelectOptions, handleToggleActiveClass}) => {
	const [active, setActive] = useState(true)

	const handleTogleActive = (e) => {
		console.log(e);
		// setActive(!active)
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