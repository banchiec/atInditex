import { useEffect, useState } from "react";
import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({name, item, colorBackGround,handleSelectOptions, handleToggleActiveClass}) => {
	const [active, setActive] = useState(true)
	const handleTogleActive = (e) => {
		if(active){
			handleSelectOptions(name, e.target.name)
		}else{
			handleSelectOptions(name, e.target.name)
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