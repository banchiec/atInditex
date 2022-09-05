import ProductsService from "../../services/product.services"
import { setWithExpiry } from "../localStorage"
const productService = new ProductsService()

export const getProducts = () => {
	productService.getProducts()
		.then((data)=> {
			console.log(data.data);
			setWithExpiry('products', JSON.stringify(data.data), 9000)
		})
		.catch((error) => console.log(error))
}
