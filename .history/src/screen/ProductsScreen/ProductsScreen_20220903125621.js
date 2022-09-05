import { useEffect, useState } from "react"
import { ContainerProducts } from "./styles/productScreenStyled"
import { getWithExpiry } from "../../utils/localStorage"
import CardProductItem from "../../components/Cards/CardProductItem/CardProductItem"

const ProductsScreen = () => {
  const [products, setProducts] = useState([])
  const [alert, setAlert] = useState(null)

  console.log(getWithExpiry('products'));

  useEffect(()=> {
    setTimeout(() => {
      setProducts(getWithExpiry('products'));
    }, 8000);
  },[])

  useEffect(() => {
    setTimeout(() => {
      if(getWithExpiry('products') === null){
        setAlert(
          <div>
            <h1>Es necesario volver a solicitar la información</h1>
          </div>
        )
        setProducts([])
      }
    }, 100000)
  },[])

  return (
    <ContainerProducts>
      { products  === null ? (
        <h1>Cargando</h1>
      ):(
        products?.map((item) => {
        return (
          <CardProductItem 
            key={item.id} 
            imgUrl={item.imgUrl}
            brand={item.brand}
            model={item.model}
            price={item.price}
          />
        )
      })) }
      {alert}
    </ContainerProducts>
  )
}

export default ProductsScreen
