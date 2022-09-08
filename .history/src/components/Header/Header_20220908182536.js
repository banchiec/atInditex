import { Link } from "react-router-dom"
import {BsCart} from 'react-icons/bs'
import { useLocation, useParams } from 'react-router-dom'
import * as path from '../../utils/paths' 
import { ContainerHeader, ListItem, ListLink } from "./headerStyled"
import { getUrl } from "../../utils/string"
import { useEffect } from "react"

const Header = ({counterCart}) => {
  let location = useLocation()

  console.log(location)
  useEffect(() => {
    getUrl()
  }, [])

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