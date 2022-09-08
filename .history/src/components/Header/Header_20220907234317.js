import { Link } from "react-router-dom"
import {BsCart} from 'react-icons/bs'
import * as path from '../../utils/paths' 
import { ContainerHeader } from "./headerStyled"
import { getWithExpiry } from "../../utils/localStorage"
import { useEffect } from "react"

const Header = (cartItems) => {
  const count = getWithExpiry('lastProductInCart')
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems])
  return(
    <ContainerHeader>
      <Link to={path.PRODUCTPAGE}>
        SHOP MOBILE
      </Link>
      <BsCart/>
    </ContainerHeader>
  )
}
export default Header