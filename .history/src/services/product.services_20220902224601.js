import axios from 'axios';
class ProductsService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_SERVER_URL}/products`,
            withCredentials: false
        })
    }                                
    deleteProduct = (id) => this.instance.delete(`/${id}`)
    getProducts = () => this.instance.get("/")   
    getOneProduct = (id) => this.instance.get(`/${id}`) 
    createProduct = (form) => this.instance.post("/new", form)  


}
export default ProductsService; 