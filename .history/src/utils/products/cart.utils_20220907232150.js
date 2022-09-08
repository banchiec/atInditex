import CartService from "../../services/cart.services"
import { getWithExpiry, setWithExpiry } from "../localStorage"

const cartService = new CartService()

// export const getCart= () => {
// 	productService.getProducts()
// 		.then((data)=> {
// 			setWithExpiry('products', JSON.stringify(data.data), 360000)
// 		})
// 		.catch((error) => console.log(error))
// }
export const setOneItemCart = (cartItem) => {
  const count = 0
  if(getWithExpiry('productInCart')){
    count++
  }

  cartService.createCart(cartItem)
  .then((data) => {
    // console.log(data.data.count);
    setWithExpiry('productInCart', JSON.stringify(data.data), 360000.)
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
