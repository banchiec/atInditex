import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loaders/Loader";
import { getWithExpiry } from "../../utils/localStorage";
import { getDetailsProduct } from "../../utils/products/products.utils";
import ButtonOptions from "./components/ButtonOptions/ButtonOptions";
import { Actions, Button, ButtonDescription, Container, ContainerDescription, ContainerDetails, ContainerImage, ContainerOptions, ContainerSelector, Details, DetailsItem, Image, ImageProduct, ListCharacters, Selector } from "./styles/detailsProductScreenStyled";

const DetailsProductScreen = () => {
  const {id} = useParams()
  const [selector, setSelector] = useState({})
  const [selectedStorage, setSelectStorage] = useState()
  const [selectedColor, setSelectColor] = useState()
  const [valuesColors, setValuesColors] = useState([])
  const [active, setActive ] = useState('active')
  const [activeStorage, setActiveStorage] = useState('')
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
      product?.colors?.map((color) =>{
        setValuesColors([...valuesColors,{
          name: color,
          active: false
        }])
      })
    }
  },[product])

  console.log(valuesColors);
  useEffect(() => {
    if(product){
      setSelector({
        name: 'colors',
        valuesColors: valuesColors,
        valuesStorage: product.internalMemory
      })
    }
  },[])

  const handleChangeSelector = (e) => {
    e.target.name === 'storage'? (
        setSelector( {name:'storage', valuesStorage:product?.internalMemory})
      ) : (
      setSelector({name: 'colors', valuesColors: product?.colors}))
    e.target.name === 'storage' ? setActiveStorage('active') : setActiveStorage('') 
    e.target.name === 'colors'? setActive('active') : setActive('')
  }

  const handleSelectOptions = (e) => {
    console.log(e);
  }

  const handleToggleActiveClass = () => {
    return "active"
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
                  { selector.name === 'colors' ? (valuesColors?.map((item) => {
                    return(
                      <ButtonOptions
                        key={item.name} 
                        colorBackGround={item.name} 
                        name={item.name}
                        handleSelectOptions={handleSelectOptions}
                        handleToggleActiveClass={handleToggleActiveClass}
                      >

                        {item.name}
                      </ButtonOptions>
                    )
                  })):(
                    selector?.valuesStorage?.map((item) => {
                      return(
                        <ButtonOptions
                          key={item.name}
                          name={item.name}
                          handleSelectOptions={handleSelectOptions}
                          handleToggleActiveClass={handleToggleActiveClass}
                        >
                          {item.name}
                        </ButtonOptions>
                      )
                    })
                  )}
                </ContainerOptions>
                <ContainerSelector>
                  <Selector 
                    name='storage' 
                    onClick={(e) => handleChangeSelector(e)} 
                    className={activeStorage}
                  >
                    Almacenamiento
                  </Selector>
                  <Selector 
                    name='colors' 
                    onClick={(e)=> handleChangeSelector(e)} 
                    className={active}
                  >
                    Colores
                  </Selector>
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