import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loaders/Loader";
import { getWithExpiry } from "../../utils/localStorage";
import { getDetailsProduct } from "../../utils/products/products.utils";
import { Actions, ContainerDetails, Details, DetailsItem, Image, ImageProduct } from "./styles/detailsProductScreenStyled";

const DetailsProductScreen = () => {
  const {id} = useParams()
  const [product, setProduct ] = useState({})

  useEffect(() => {
   getDetailsProduct(id)
  }, [])

  useEffect(()=> {
    setTimeout(() => {
      setProduct(getWithExpiry(`detailsProduct${id}`))
    }, 1000)
  }, [])
  useEffect(() => {
    setTimeout(() => {
      if(getWithExpiry(`detailsProduct${id}`) === null){
      }
    }, 3600000)

  },[])
  console.log(product);

  return (
    <div>
      { !product ? 
      (
        <Loader/>
      ):(
        <ContainerDetails>
          <img src={product.imgUrl} alt={product.imgUrl}/>
          <div>
            <Details>
              <DetailsItem>{product.brand}</DetailsItem>
              <DetailsItem>{product.model}</DetailsItem>
              <DetailsItem>{product.price}</DetailsItem>
              <DetailsItem>{product.cpu}</DetailsItem>
              <DetailsItem>{product.ram}</DetailsItem>
              <DetailsItem>{product.os}</DetailsItem>
              <DetailsItem>{product.displayResolution}</DetailsItem>
              <DetailsItem>{product.battery}</DetailsItem>
              <DetailsItem>{product.primaryCamera}</DetailsItem>
              <DetailsItem>{product.displayResolution}</DetailsItem>
            </Details>
            <Actions>

            </Actions>
            
          </div>
          {product.imgUrl}
        </ContainerDetails>
      )}

    </div>
  )

}
export default DetailsProductScreen
