import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loaders/Loader";
import { getWithExpiry } from "../../utils/localStorage";
import { getDetailsProduct } from "../../utils/products/products.utils";
import ButtonOptions from "./components/ButtonOptions/ButtonOptions";
import { Actions, Button, ButtonDescription, Container, ContainerDescription, ContainerDetails, ContainerImage, ContainerOptions, ContainerSelector, Details, DetailsItem, Image, ImageProduct, ListCharacters, Selector } from "./styles/detailsProductScreenStyled";

const DetailsProductScreen = () => {
  const {id} = useParams()
  const [option, setOption] = useState([])
  const [selector, setSelector] = useState({})
  const [active, setActive ] = useState('active')
  const [activeOption, setActiveOption] = useState(false)
  const [activeOptionClass, setActiveOptionClass] = useState('')
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
      setSelector({
        name: 'colors',
        values: product.colors
      })
    }
  },[product])

  const handleChangeSelector = (e) => {
    e.target.name === 'storage'? (
        setSelector( {name:'storage', values:product?.internalMemory})
      ) : (
      setSelector({name: 'colors', values: product?.colors}))
    e.target.name === 'storage' ? setActiveStorage('active') : setActiveStorage('') 
    e.target.name === 'colors'? setActive('active') : setActive('')
  }

  const handleSelectOptions = (e) => {
    console.log(e);
    setActiveOption(!activeOption)
    handleToggleActiveClass()
  }

  const handleToggleActiveClass = () => {
    console.log("object");
    return "active"
  }
  console.log(activeOption);

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
                  <h5>DESCRIPCI??N:</h5>
                  <DetailsItem>Marca: <span>{product.brand}</span></DetailsItem>
                  <DetailsItem>Modelo: <span> {product.model}</span></DetailsItem>
                  <DetailsItem>Precio: <span> {product.price}</span></DetailsItem>
                  <DetailsItem>CPU: <span> {product.cpu}</span></DetailsItem>
                  <DetailsItem>RAM: <span> {product.ram}</span></DetailsItem>
                  <DetailsItem>SO: <span> {product.os}</span></DetailsItem>
                  <DetailsItem>Resoluci??n de pantalla: <span> {product.displayResolution}</span></DetailsItem>
                  <DetailsItem>Bateria: <span> {product.battery}</span></DetailsItem>
                  <DetailsItem>C??mara principal: <span> {product.primaryCamera}</span></DetailsItem>
                  <DetailsItem>C??mara secundaria: <span> {product.secondaryCmera}</span></DetailsItem>
                  <DetailsItem>Dimensiones: <span> {product.dimentions}</span></DetailsItem>
                </Details>
              </ListCharacters>
              <Actions>
                <ContainerOptions>
                  {selector?.values?.map((item) => {
                    return(
                      <ButtonOptions
                        key={item} 
                        colorBackGround={item} 
                        name={item}
                        handleSelectOptions={handleSelectOptions}
                        handleToggleActiveClass={handleToggleActiveClass}
                      >
                        {item}
                      </ButtonOptions>
                    )
                  })}
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
                <Button>A??adir</Button>
              </Actions>
            </ContainerDescription>
          </Container>
        </ContainerDetails>
      )}
    </div>
  )

}
export default DetailsProductScreen
