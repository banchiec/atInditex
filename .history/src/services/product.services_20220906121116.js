import axios from 'axios'

class ProductsService {
	constructor() {
		this.instance = axios.create({
			baseURL: `https://front-test-api.herokuapp.com/api/product`,
			withCredentials: false
		})
	}                                
	deleteProduct = (id) => this.instance.delete(`/${id}`)
	getProducts = () => this.instance.get("/")   
	getOneProduct = (id) => this.instance.get(`/${id}`) 
	createProduct = (form) => this.instance.post("/new", form)  
}
export default ProductsService; 