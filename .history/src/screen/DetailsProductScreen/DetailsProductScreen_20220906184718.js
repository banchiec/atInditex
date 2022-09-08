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
            <Details>
              <DetailsItem>Marca: <span>{product.brand}</span></DetailsItem>
              <DetailsItem>Modelo: <span> {product.model}</span></DetailsItem>
              <DetailsItem>Precio: <span> {product.price}</span></DetailsItem>
              <DetailsItem>CPU: <span> {product.cpu}</span></DetailsItem>
              <DetailsItem>RAM: <span> {product.ram}</span></DetailsItem>
              <DetailsItem>SO: <span> {product.os}</span></DetailsItem>
              <DetailsItem>Resolución de pantalla: <span> {product.displayResolution}</span></DetailsItem>
              <DetailsItem>Bateria: <span> {product.battery}</span></DetailsItem>
              <DetailsItem>Cámara principal: <span> {product.primaryCamera}</span></DetailsItem>
              <DetailsItem>Cámara secundaria: <span> {product.secondaryCmera}</span></DetailsItem>
              <DetailsItem>Dimensiones: <span> {product.dimentions}</span></DetailsItem>
            </Details>
            <Actions>
              <button>Añadir</button>
            </Actions>
            
        </ContainerDetails>
      )}
    </div>
  )

}
export default DetailsProductScreen
