import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({item}) => {
	console.log(item);
	return(
		<Button>
			{item}
		</Button>
	)
}
export default ButtonOptions