import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailsProduct } from "../../utils/products/products.utils";

const DetailsProductScreen = () => {
  const {id} = useParams()
  const [product, setProduct ] = useState({})

  useEffect(() => {
    if(id){
      getDetailsProduct(id)
    }
  }, [])

  return (
    <div>DetailsProductScreen</div>
  )

}

export default DetailsProductScreen