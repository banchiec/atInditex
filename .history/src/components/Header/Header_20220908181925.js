import { Link, useParams } from "react-router-dom"
import {BsCart} from 'react-icons/bs'
import { ContainerHeader, ListItem, ListLink } from "./headerStyled"

const Header = ({counterCart, path}) => {

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