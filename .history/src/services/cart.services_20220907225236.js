import axios from 'axios'

class CartService {
	constructor() {
		this.instance = axios.create({
			baseURL: `https://front-test-api.herokuapp.com/api/cart`,
			withCredentials: false
		})
	}                                
	deleteProduct = (id) => this.instance.delete(`/${id}`)
	getProducts = () => this.instance.get("/")   
	getOneProduct = (id) => this.instance.get(`/${id}`) 
	createProduct = (form) => this.instance.post("/new", form)  
}
export default CartService;