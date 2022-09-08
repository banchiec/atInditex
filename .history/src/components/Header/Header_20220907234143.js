import { Link } from "react-router-dom"
import {BsCart} from 'react-icons/bs'
import * as path from '../../utils/paths' 
import { ContainerHeader } from "./headerStyled"
import { getWithExpiry } from "../../utils/localStorage"

const Header = (cartItems) => {
  const count = getWithExpiry('lastProductInCart')
  console.log(cartItems);
  return(
    <ContainerHeader>
      <Link to={path.PRODUCTPAGE}>
        SHOP MOBILE
      </Link>
      {count.countItems}
      <BsCart/>
    </ContainerHeader>
  )
}
export default Header