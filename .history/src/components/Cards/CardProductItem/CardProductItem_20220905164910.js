import {Card} from './cardProductItemStyled.js'

const CardProductItem = ({ image, model, price, brand}) => {
	return(
		<Card>
			<img src={brand}/>
			{model}
		</Card>
	)
} 
export default CardProductItem