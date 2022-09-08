import axios from 'axios'

class CartService {
	constructor() {
		this.instance = axios.create({
			baseURL: `https://front-test-api.herokuapp.com/api/cart`,
			withCredentials: false
		})
	}                                
	deleteCart= (id) => this.instance.delete(`/${id}`)
	getCarts= () => this.instance.get("/")   
	getOneCart= (id) => this.instance.get(`/${id}`) 
	createCart= (form) => this.instance.post("/", form)  
}
export default CartService;