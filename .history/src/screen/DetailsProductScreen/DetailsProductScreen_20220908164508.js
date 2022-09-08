import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartAlert from "../../components/Alerts/CartAlert/CartAlert";
import Loader from "../../components/Loaders/Loader";
import { getWithExpiry } from "../../utils/localStorage";
import { setOneItemCart } from "../../utils/products/cart.utils";
import { getDetailsProduct } from "../../utils/products/products.utils";
import ButtonOptions from "./components/ButtonOptions/ButtonOptions";
import { Actions,
  Button,  
  Container, 
  ContainerDescription, 
  ContainerDetails, 
  ContainerImage, 
  ContainerOptions, 
  ContainerSelector, 
  Details, 
  DetailsItem, 
  ListCharacters, 
  Selector } 
from "./styles/detailsProductScreenStyled";

const DetailsProductScreen = ({handleCounterCart}) => {
  const {id} = useParams()
  const [selector, setSelector] = useState({})
  const [colors, setColors] = useState(true)
  const [storage, setStorage] =  useState(false)
  const [selectorStorage, setSelectorStorage] = useState({})
  const [active, setActive ] = useState('active')
  const [activeStorage, setActiveStorage] = useState('')
  const [product, setProduct ] = useState({})

  const [alert, setAlert] = useState(false)
  const [alertAdd, setAlertAdd] = useState(false)

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

  useEffect(()=> {
    setTimeout(() => {
      handleCounterCart(getWithExpiry(`lastProductInCart`))
    }, 1000)
  }, [])

  useEffect(() => {
    if(product){
      const colores = product?.colors?.map((color) =>{
        return ({
          name: color,
          active: false
        })
      })
      setSelector({
        name: 'colors',
        valuesColors: colores,
      })
      const storage = product?.internalMemory?.map((item) => {
        return ({
          name: item,
          active: false
        })
      })
      setSelectorStorage({
        name: 'storage',
        valuesStorage: storage
      })
    }
  },[product])

  const handleChangeSelector = (e) => {
    if(e.target.name === 'colors' && storage === null){
      setStorage(false)
      setColors(true)
      console.log(e.target.name);
      setStorage(false)
    }else{
      setColors(!colors)
    }
    if( e.target.name === 'storage' &&  colors === null){
        setStorage(true)
        setColors(false)
    }else{
      setStorage(!storage)
    }

    e.target.name === 'storage'? (setSelectorStorage(selectorStorage)): (setSelector(selector))
    e.target.name === 'storage' ? setActiveStorage('active') : setActiveStorage('') 

    e.target.name === 'colors'? setActive('active') : setActive('')

  }

  const handleSelectOptions = (name, option) => {
    if(name === 'colors'){
      const newValuesColors =  selector.valuesColors.map((color) => {
        color.active = false
        if(color.name === option){
          color.active = !color.active
        }
        return color 
      }) 
      setSelector({ 
        name: 'colors',
        valuesColors: newValuesColors
      })
    }
    if(name === 'storage'){
      const newValuesStorage =  selectorStorage.valuesStorage.map((item) => {
        item.active = false
        if(item.name === option){
          item.active = !item.active 
        }
        return item 
      }) 
      setSelectorStorage({ 
        name: 'storage',
        valuesStorage: newValuesStorage 
      })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const color = selector.valuesColors.filter((color) => {
      return color.active === true
    })
    const storage = selectorStorage.valuesStorage.filter((item) => {
      return item.active === true
    })
    if(color[0]?.name != null || storage[0]?.name  != null ){
        const newProductToCart = {
          id,
          colorCode: color[0]?.name,
          storageCode: storage[0]?.name,
        }
        let cst = {}
        setTimeout(() => {
          cst = getWithExpiry('lastProductInCart')
          handleCounterCart(cst)
        }, 1000)
        setOneItemCart(newProductToCart)
        setAlertAdd(true)
    }else{
      setAlert(true)
    }
  }
  const handleCloseAlert = () => {
    setAlert(false)
  }
  const handleCloseAlertAdd = () => {
      setAlertAdd(false)
  }

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
                    { colors &&  selector?.valuesColors?.map((item) => {
                      return(
                        <ButtonOptions
                          key={item.name} 
                          colorBackGround={item.name} 
                          name={selector.name}
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
                            key={item.name}
                            item={item}
                            name={selectorStorage.name}
                            handleSelectOptions={handleSelectOptions}
                          />
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
                  <Button type="submit" onClick={(e) => handleSubmit(e)}>Añadir</Button>
                </Actions>
              </ContainerDescription>
            </Container>
          </ContainerDetails>
        )
      }
      {alert && (
        <CartAlert
          text= 'Necesitas introducir dos categorias'
          handleCloseAlert= {handleCloseAlert}
        />
      )}
      {alertAdd && (
        <CartAlert
          text= 'Se agrego al carrito'
          alertAdd={alertAdd}
          handleCloseAlertAdd = {handleCloseAlertAdd}
        />
      )}
    </div>
  )
}
export default DetailsProductScreen