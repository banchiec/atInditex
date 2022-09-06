import {Card} from './cardProductItemStyled.js'

const CardProductItem = ({ imgUrl, model, price, brand}) => {
	return(
		<Card>
			<div>
				<img src={imgUrl} alt={imgUrl}/>
				<h4>{model}</h4>
			</div>
			<article>
				<h5 className='card_brand'>{`Marca:  ${brand}`}</h5>
				<p>{`con tu tarifa Móvil desde: €${price}`}</p>
			</article>
		</Card>
	)
} 
export default CardProductItem