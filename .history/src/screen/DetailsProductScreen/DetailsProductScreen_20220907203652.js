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
  const [colors, setColors] = useState(true)
  const [storage, setStorage] =  useState(false)
  const [selectorStorage, setSelectorStorage] = useState({})
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
      const colores = product?.colors?.map((color) =>{
        return ({
          name: color,
          active: false
        })
      })
      console.log(colores);
      setSelector({
        name: 'colors',
        valuesColors: colores,
      })
    }
  },[product])

  const handleChangeSelector = (e) => {
    e.target.name === 'colors'? setColors(true): setColors(!colors)
    e.target.name === 'storage'? setStorage(true): setStorage(!storage)

    e.target.name === 'storage'? (
        setSelectorStorage({ name:'storage', valuesStorage: product?.internalMemory })
      ):(
      setSelector(selector))

    e.target.name === 'storage' ? setActiveStorage('active') : setActiveStorage('') 
    e.target.name === 'colors'? setActive('active') : setActive('')
  }


  const handleSelectOptions = (name) => {
    selector.valuesColors.map((item) => {
      item.active = false
      if(item.name === name){
        item.active = !item.active 
        console.log(item);
      }
    }) 
    console.log(selector.valuesColors);
  }

  console.log(selector.valuesColors);
  return (
    <div>
      {!product ? 
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
                    { colors &&  selector?.valuesColors?.map((item) => {
                      return(
                        <ButtonOptions
                          key={item.name} 
                          colorBackGround={item.name} 
                          item={item}
                          handleSelectOptions={handleSelectOptions}
                        >
                          {item.name}
                        </ButtonOptions>
                      )
                    })
                    }
                    {storage &&  selectorStorage?.valuesStorage?.map((item) => {
                        return(
                          <ButtonOptions
                            key={item}
                            name={item}
                            handleSelectOptions={handleSelectOptions}
                          >
                            {item}
                          </ButtonOptions>
                        )
                      })
                    }
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
        )
      }
    </div>
  )
}
export default DetailsProductScreen
