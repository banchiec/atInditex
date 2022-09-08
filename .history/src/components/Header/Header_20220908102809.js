import { Link } from "react-router-dom"
import {BsCart} from 'react-icons/bs'
import * as path from '../../utils/paths' 
import { ContainerHeader } from "./headerStyled"

const Header = (counterCart) => {

  console.log(counterCart);
  return(
    <ContainerHeader>
      <Link to={path.PRODUCTPAGE}>
        SHOP MOBILE
      </Link>
      <div>
        {counterCart.countItems}
        <BsCart/>
      </div>
    </ContainerHeader>
  )
}
export default Header