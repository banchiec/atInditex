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
          <div>
            <img src={product.imgUrl} alt={product.imgUrl}/>
          </div>
          <div>
            <Details>
              <DetailsItem>Marca: <span>{product.brand}</span></DetailsItem>
              <DetailsItem>Modelo: <span> {product.model}</span></DetailsItem>
              <DetailsItem>Modelo: <span> {product.price}</span></DetailsItem>
              <DetailsItem>Modelo: <span> {product.cpu}</span></DetailsItem>
              <DetailsItem>Modelo: <span> {product.ram}</span></DetailsItem>
              <DetailsItem>Modelo: <span> {product.os}</span></DetailsItem>
              <DetailsItem>Modelo: <span> {product.displayResolution}</span></DetailsItem>
              <DetailsItem>Modelo: <span> {product.battery}</span></DetailsItem>
              <DetailsItem>Modelo: <span> {product.primaryCamera}</span></DetailsItem>
              <DetailsItem>Modelo: <span> {product.secondaryCmera}</span></DetailsItem>
              <DetailsItem>Modelo: <span> {product.dimentions}</span></DetailsItem>
            </Details>
            <Actions>
              <h1>Local</h1>
            </Actions>
            
          </div>
        </ContainerDetails>
      )}
    </div>
  )

}
export default DetailsProductScreen
