import {Card} from './cardProductItemStyled.js'

const CardProductItem = ({ imgUrl, model, price, brand}) => {
	return(
		<Card>
			<div>
				<img src={imgUrl} alt={imgUrl}/>
			</div>
			<article>
				{model}
			</article>
		</Card>
	)
} 
export default CardProductItem