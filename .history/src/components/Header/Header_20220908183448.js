import { Link } from "react-router-dom"
import {BsCart} from 'react-icons/bs'
import { useLocation, useParams } from 'react-router-dom'
import * as path from '../../utils/paths' 
import { ContainerHeader, ListItem, ListLink } from "./headerStyled"
import { getUrl } from "../../utils/string"
import { useEffect, useState } from "react"
import { getDetailsProduct } from "../../utils/products/products.utils"
import { getWithExpiry } from "../../utils/localStorage"

const Header = ({counterCart}) => {
  const [productCurrent, setProductCurrent] = useState(getWithExpiry('lastProductInCart'))
  console.log(productCurrent);

  console.log(productCurrent);

  return(
    <ContainerHeader>
      <Link to={path.PRODUCTPAGE}>
        SHOP MOBILE
      </Link>
      <ListLink>
        <Link to={'/'}>
          <ListItem>
            Home
          </ListItem>
        </Link>
      </ListLink>
      <div>
        <p>
          {counterCart != null ? counterCart?.countItems: 0}
        </p>
        <BsCart/>
      </div>
    </ContainerHeader>
  )
}
export default Header