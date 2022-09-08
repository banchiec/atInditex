import { Link } from 'react-router-dom'
import * as path from '../../../utils/paths'
import {Card} from './cardProductItemStyled.js'

const CardProductItem = ({ id, imgUrl, model, price, brand}) => {
	return(
		<Card>
			<Link to={`/product/details/${id}`}>
				<div>
					<img src={imgUrl} alt={imgUrl}/>
					<h4>{model}</h4>
				</div>
				<article>
					<h5 className='card_brand'>{`Marca:  ${brand}`}</h5>
					<p>con tu tarifa Móvil desde <span>{`€${price}`}</span></p>
				</article>
			</Link>
		</Card>
	)
} 
export default CardProductItem