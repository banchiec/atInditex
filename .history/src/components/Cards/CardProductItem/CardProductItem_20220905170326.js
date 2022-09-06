import {Card} from './cardProductItemStyled.js'

const CardProductItem = ({ imgUrl, model, price, brand}) => {
	return(
		<Card>
			<img src={imgUrl}/>
			<article>
				{model}
			</article>
		</Card>
	)
} 
export default CardProductItem