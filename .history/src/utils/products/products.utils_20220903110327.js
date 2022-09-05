import ProductsService from "../../services/product.services"
const productService = new ProductsService()

export const getProducts = () => {
    productService.getOneProduct()
			.then((data)=> {
				setWithExpiry('products', JSON.stringify(data.data), 9000)
			})
			.catch((error) => console.log(error))
}

