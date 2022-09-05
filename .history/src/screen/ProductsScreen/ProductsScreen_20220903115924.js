import { useEffect, useState } from "react"
import { ContainerProducts } from "./styles/productScreenStyled"
import { getWithExpiry } from "../../utils/localStorage"
import CardProductItem from "../../components/Cards/CardProductItem/CardProductItem"

const productsArr = '' 
const ProductsScreen = () => {
  const [products, setProducts] = useState([])
  const [alert, setAlert] = useState(null)

  // const productsLocal = getWithExpiry('products')
  // console.log((productsLocal));

  useEffect(() => {
    setTimeout(() => {
      if(getWithExpiry('products') === null){
        setAlert(
          <div>
            <h1>Es necesario volver a solicitar la información</h1>
          </div>
        )
      }
    }, 100000)
  },[])

  useEffect(()=> {
    productsArr= getWithExpiry('products')
    setProducts(getWithExpiry('products'))
  },[])

  console.log(typeof(products))

  return (
    <ContainerProducts>
      {/* {products?.map((item) => {
        return (
          <CardProductItem 
            key={item.id} 
            imgUrl={item.imgUrl}
            brand={item.brand}
            model={item.model}
            price={item.price}
          />
        )
      }) } */}
      {alert}
    </ContainerProducts>
  )
}

export default ProductsScreen
