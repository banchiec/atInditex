import { Link } from "react-router-dom"
import {BsCart} from 'react-icons/bs'
import * as path from '../../utils/paths' 
import { ContainerHeader } from "./headerStyled"
import { useEffect, useState } from "react"

const Header = ({counterCart}) => {
  const [cartItems,setCartItems] = useState()

  // useEffect(() => {
  //   if(counterCart === null){
  //     setCartItems(0)
  //   }
  //   setCartItems(counterCart?.countItems)
  // }, [])

  // console.log(counterCart);

  return(
    <ContainerHeader>
      <Link to={path.PRODUCTPAGE}>
        SHOP MOBILE
      </Link>
      <div>
        <p>
        { counterCart != null ? counterCart?.countItems: 0}
        </p>
        <BsCart/>
      </div>
    </ContainerHeader>
  )
}
export default Header