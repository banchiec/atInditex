import { useEffect, useState } from "react"
import { ContainerProducts } from "./styles/productScreenStyled"
import { getWithExpiry } from "../../utils/localStorage"
import CardProductItem from "../../components/Cards/CardProductItem/CardProductItem"
import Loader from "../../components/Loaders/Loader"

const ProductsScreen = () => {
  const [products, setProducts] = useState(null)
  const [alert, setAlert] = useState(null)

  useEffect(()=> {
    setTimeout(() => {
      setProducts(getWithExpiry('products'));
    }, 4000);
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
  console.log(products);

  return (
    <ContainerProducts>
      { !products ? (
        <Loader/>
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
