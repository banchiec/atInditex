import { Link } from "react-router-dom"
import {BsCart} from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import * as path from '../../utils/paths' 
import { ContainerHeader, ListItem, ListLink } from "./headerStyled"

const Header = ({counterCart}) => {
  let location = useLocation()

  console.log(location.pathname)

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