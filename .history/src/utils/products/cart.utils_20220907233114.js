import CartService from "../../services/cart.services"
import { getWithExpiry, setWithExpiry } from "../localStorage"

let count = 0 
const cartService = new CartService()

export const setOneItemCart = (cartItem) => {
  if(getWithExpiry('lastProductInCart')){
    count = count + 1
  }

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
