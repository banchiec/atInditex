import { useEffect, useState } from "react"
import { ContainerProducts } from "./styles/productScreenStyled"
import { getWithExpiry } from "../../utils/localStorage"
import CardProductItem from "../../components/Cards/CardProductItem/CardProductItem"

const ProductsScreen = () => {
  const [products, setProducts] = useState([])
  const [alert, setAlert] = useState(null)

  console.log(getWithExpiry('products'));

  useEffect(() => {
    (localStorage.getItem('products'))? setProducts(localStorage.getItem('products')): setProducts(null)
  },[])

  // console.log(products);
  useEffect(() => {
    setTimeout(() => {
      if(getWithExpiry('products') === null){
        setProducts([])
        setAlert(
          <div>
            <h1>Es necesario volver a solicitar la información</h1>
          </div>
        )
      }
    }, 150000)
  },[])

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
