import ProductsService from "../../services/product.services"
import { setWithExpiry } from "../localStorage"
const productService = new ProductsService()

export const getProducts = () => {
	productService.getProducts()
		.then((data)=> {
			setWithExpiry('products', JSON.stringify(data.data), 360000)
		})
		.catch((error) => console.log(error))
}
export const getDetailsProduct = (id) => {
	productService.getOneProduct(id)
	.then((data) => {
		setWithExpiry(`detailsProduct${id}`, JSON.stringify(data.data), 360000)
	})
	.catch((error) => console.log(error))
}
