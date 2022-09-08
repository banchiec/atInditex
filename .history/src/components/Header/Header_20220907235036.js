import { Link } from "react-router-dom"
import {BsCart} from 'react-icons/bs'
import * as path from '../../utils/paths' 
import { ContainerHeader } from "./headerStyled"
import { getWithExpiry, setWithExpiry } from "../../utils/localStorage"
import { useEffect, useState } from "react"

const Header = () => {
  // const count = getWithExpiry('lastProductInCart')
  const [count, setCount] = useState(getWithExpiry('lastProductInCart'))
  useEffect(() => {
    setCount(getWithExpiry(lastProductInCart)) 
  }, [getWithExpiry])
  useEffect(() => {
    getWithExpiry('lastProductInCart')
  }, [])

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