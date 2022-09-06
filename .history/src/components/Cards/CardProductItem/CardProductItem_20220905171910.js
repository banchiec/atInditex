import {Card} from './cardProductItemStyled.js'

const CardProductItem = ({ imgUrl, model, price, brand}) => {
	return(
		<Card>
			<div>
				<img src={imgUrl} alt={imgUrl}/>
				<h4>{model}</h4>
			</div>
			<article>
				<p className='card_brand'>{`Marca ${brand}`}</p>
				<br/>
				<br/>
				<br/>
				<br/>
				<p>{`con tu tarifa Móvil desde: ${price}`}</p>
			</article>
		</Card>
	)
} 
export default CardProductItem