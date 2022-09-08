import ProductsService from "../../services/product.services"
import { setWithExpiry } from "../localStorage"
const productService = new ProductsService()

export const getProducts = () => {
	productService.getProducts()
		.then((data)=> {
			setWithExpiry('products', JSON.stringify(data.data), 9000)
		})
		.catch((error) => console.log(error))
}
export const getDetailsProduct = (id) => {
	productService.getOneProduct(id)
		.the((data) => {
			console.log(data.data);
		})
		.catch((error) => console.log(error))
}
