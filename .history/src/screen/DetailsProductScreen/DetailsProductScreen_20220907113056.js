import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loaders/Loader";
import { getWithExpiry } from "../../utils/localStorage";
import { getDetailsProduct } from "../../utils/products/products.utils";
import { Actions, Button, ButtonDescription, Container, ContainerDescription, ContainerDetails, ContainerImage, ContainerOptions, ContainerSelector, Details, DetailsItem, Image, ImageProduct, ListCharacters, Selector } from "./styles/detailsProductScreenStyled";

const DetailsProductScreen = () => {
  const {id} = useParams()
  const [options, setOptions] = useState([])
  const [selector, setSelector] = useState()
  const [active, setActive ] = useState('active')
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
  
  useEffect(() => {
    if(product){
      setSelector(product.colors)
    }
    
  },[product])

  console.log(selector);
  const handleChangeSelector = (e) => {
    e.preventDefault()
    console.log(e.target.name)
    e.target.name === 'storage'? setSelector(product?.internalMemory): setSelector(product?.colors)
  }
  return (
    <div>
      { !product ? 
      (
        <Loader/>
      ):(
        <ContainerDetails>
          <Container>
            <ContainerImage>
              <img src={product.imgUrl} alt={product.imgUrl}/>
            </ContainerImage>
            <ContainerDescription>
              <ListCharacters>
                <Details>
                  <h5>DESCRIPCIÓN:</h5>
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
              </ListCharacters>
              <Actions>
                <ContainerOptions>
                  {selector?.map((item) => {
                    return(
                      <>
                        <ButtonDescription key={item} colorBackGround={`${item}`}>{}</ButtonDescription>
                      </>
                    )
                  })}
                </ContainerOptions>
                <ContainerSelector>
                  <Selector name='storage' onClick={(e) => handleChangeSelector(e)}>Almacenamiento</Selector>
                  <Selector name='colors' onClick={(e)=> handleChangeSelector(e)} className='active'>Colores</Selector>
                </ContainerSelector>
                <Button>Añadir</Button>
              </Actions>
            </ContainerDescription>
          </Container>
        </ContainerDetails>
      )}
    </div>
  )

}
export default DetailsProductScreen
