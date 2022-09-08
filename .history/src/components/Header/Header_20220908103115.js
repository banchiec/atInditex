import { Link } from "react-router-dom"
import {BsCart} from 'react-icons/bs'
import * as path from '../../utils/paths' 
import { ContainerHeader } from "./headerStyled"
import { useEffect, useState } from "react"

const Header = (counterCart) => {
  const [cartItems,setCartItems] = useState()

  useEffect(() => {
    setCartItems(counterCart.countItems)
  }, [])
  console.log(cartItems);
  return(
    <ContainerHeader>
      <Link to={path.PRODUCTPAGE}>
        SHOP MOBILE
      </Link>
      <div>
        <p>
          {cartItems}
        </p>
        <BsCart/>
      </div>
    </ContainerHeader>
  )
}
export default Header