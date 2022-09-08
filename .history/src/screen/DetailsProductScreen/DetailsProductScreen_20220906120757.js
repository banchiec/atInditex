import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailsProduct } from "../../utils/products/products.utils";

const DetailsProductScreen = () => {
  const id = useParams()
  console.log(id);
  console.log("object");

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