import { Link } from "react-router-dom"
import {BsCart} from 'react-icons/bs'
import * as path from '../../utils/paths' 
import { ContainerHeader } from "./headerStyled"
import { getWithExpiry } from "../../utils/localStorage"

const Header = () => {
  const [count, setCount] = useState({})
  console.log(count);
  useEffect(() => {
    setCount(getWithExpiry('lastProductInCart'))
  }, [count])
  return(
    <ContainerHeader>
      <Link to={path.PRODUCTPAGE}>
        SHOP MOBILE
      </Link>
      <div>
        {count.countItems}
        <BsCart/>
      </div>
    </ContainerHeader>
  )
}
export default Header