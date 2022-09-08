import { Link } from "react-router-dom"
import {BsCart} from 'react-icons/bs'
import * as path from '../../utils/paths' 
import { ContainerHeader, ListItem, ListLink } from "./headerStyled"
import { getUrl } from "../../utils/string"
import { useEffect, useState } from "react"
import { getWithExpiry } from "../../utils/localStorage"

const Header = ({counterCart}) => {
  const [idProduct, setIdProduct] = useState()
  const [productCurrent, setProductCurrent] = useState()


  useEffect(() => {
    setIdProduct(getUrl())
  }, [])
  useEffect(() => {
    setProductCurrent(getWithExpiry(`detailsProduct${idProduct}`))

  }, [])

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
        <Link to={'#'}>
          <ListItem>
            {`Detalles ${productCurrent?.model} - ${productCurrent?.brand}`}
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