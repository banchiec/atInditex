import CartService from "../../services/cart.services"
import { getWithExpiry, setWithExpiry } from "../localStorage"

let count = 0 
const cartService = new CartService()

// export const getCart= () => {
// 	productService.getProducts()
// 		.then((data)=> {
// 			setWithExpiry('products', JSON.stringify(data.data), 360000)
// 		})
// 		.catch((error) => console.log(error))
// }
export const setOneItemCart = (cartItem) => {
  if(getWithExpiry('lastProductInCart')){
    count = count + 1
  }
  console.log(count);

  cartService.createCart(cartItem)
  .then((data) => {
    const cartItems ={
      data: data.data,
      countItems: count
    }
    setWithExpiry('lastProductInCart', JSON.stringify(cartItems), 360000.)
  })
  .catch((error) => console.log(error))
}
// export const getDetailsProduct = (id) => {
// 	productService.getOneProduct(id)
// 	.then((data) => {
// 		setWithExpiry(`detailsProduct${data.data.id}`, JSON.stringify(data.data), 360000)
// 	})
// 	.catch((error) => console.log(error))
// }