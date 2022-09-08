import { Link } from "react-router-dom"
import {BsCart} from 'react-icons/bs'
import * as path from '../../utils/paths' 
import { ContainerHeader } from "./headerStyled"
import { getWithExpiry, setWithExpiry } from "../../utils/localStorage"
import { useEffect, useState } from "react"

const Header = () => {

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