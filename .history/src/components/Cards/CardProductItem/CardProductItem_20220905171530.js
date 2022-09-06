import {Card} from './cardProductItemStyled.js'

const CardProductItem = ({ imgUrl, model, price, brand}) => {
	return(
		<Card>
			<div>
				<img src={imgUrl} alt={imgUrl}/>
				<h4>{model}</h4>
			</div>
			<article>
				<p>Marca: {brand}</p>
				<p>con tu tarifa Móvil desde: {price}</p>
			</article>
		</Card>
	)
} 
export default CardProductItem