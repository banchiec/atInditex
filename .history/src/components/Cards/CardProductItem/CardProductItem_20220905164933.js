import {Card} from './cardProductItemStyled.js'

const CardProductItem = ({ imgUrl, model, price, brand}) => {
	return(
		<Card>
			<img src={brand}/>
			{model}
		</Card>
	)
} 
export default CardProductItem