import {Card} from './cardProductItemStyled.js'

const CardProductItem = ({ image, model, price, brand}) => {
	return(
		<Card>
			{model}
		</Card>
	)
} 
export default CardProductItem