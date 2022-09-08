import { Link } from "react-router-dom"
import {BsCart} from 'react-icons/bs'
import * as path from '../../utils/paths' 
import { ContainerHeader } from "./headerStyled"

const Header = ({counterCart}) => {

  return(
    <ContainerHeader>
      <Link to={path.PRODUCTPAGE}>
        SHOP MOBILE
      </Link>
      <div>
        <ul>
          <li>Home</li>
        </ul>
      </div>
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