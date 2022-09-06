import {Card} from './cardProductItemStyled.js'

const CardProductItem = ({ imgUrl, model, price, brand}) => {
	return(
		<Card>
			<div>
				<img src={imgUrl} alt={imgUrl}/>
				<h4>{model}</h4>
			</div>
			<article>
				<p>Marca:{brand}</p>
				<span>Precio: {price}</span>
			</article>
		</Card>
	)
} 
export default CardProductItem