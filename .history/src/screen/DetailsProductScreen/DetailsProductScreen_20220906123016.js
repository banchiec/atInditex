import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsProduct } from "../../utils/products/products.utils";

const DetailsProductScreen = () => {
  const {id} = useParams()
  const [product, setProduct ] = useState({})

  useEffect(() => {
    if(id){
     const details =  getDetailsProduct(id)
     setProduct(details)
    }
  }, [])
  useEffect(()=> {
  }, [])

  console.log(product);
  return (
    <div>DetailsProductScreen</div>
  )

}

export default DetailsProductScreen