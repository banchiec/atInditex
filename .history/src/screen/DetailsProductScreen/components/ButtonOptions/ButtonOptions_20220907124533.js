import { Button } from "./buttonOptionsStyled"

const ButtonOptions = ({key}) => {
	console.log(key);
	return(
		<Button>
			{key}
		</Button>
	)
}
export default ButtonOptions