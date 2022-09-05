import { Link } from "react-router-dom"
import {BsCart} from 'react-icons/bs'
import * as path from '../../utils/paths' 
import { ContainerHeader } from "./headerStyled"

const Header = () => {
  return(
    <ContainerHeader>
      <div>
        <Link to={path.PRODUCTPAGE}>
          FRONTEND - TEST 
        </Link>
      </div>
      <div>
        <BsCart/>
      </div>
    </ContainerHeader>
  )
}
export default Header