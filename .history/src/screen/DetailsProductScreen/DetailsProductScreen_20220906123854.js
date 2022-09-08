import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loaders/Loader";
import { getWithExpiry } from "../../utils/localStorage";
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
    setTimeout(() => {
      setProduct(getWithExpiry(`detailsProduct${id}`))
    }, 1000)
  }, [])
  console.log(product);

  return (
    <div>
      {product ? 
      (
        <Loader/>
      ):(
        <div></div>
      )}

    </div>
  )

}

export default DetailsProductScreen