import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailsProduct } from "../../utils/products/products.utils";

const DetailsProductScreen = () => {
  const {id} = useParams()

  getDetailsProduct(id)
  useEffect(() => {
    if(id){
    }
  }, [])

  return (
    <div>DetailsProductScreen</div>
  )

}

export default DetailsProductScreen