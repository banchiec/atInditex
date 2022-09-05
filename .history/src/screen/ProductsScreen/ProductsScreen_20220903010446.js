import { useEffect, useState } from "react"
import { ContainerProducts } from "./styles/productScreenStyled"
import ProductsService from "../../services/product.services"
import { setWithExpiry, getWithExpiry } from "../../utils/localStorage"
import CardProductItem from "../../components/Cards/CardProductItem/CardProductItem"

const ProductsScreen = () => {
  const [products, setProducts] = useState([])
  const productService = new ProductsService()
  const [alert, setAlert] = useState(null)

  const getProducts = () => {
    productService
    .getProducts()
    .then((data)=> {
      setProducts(data.data)
      setWithExpiry('products', JSON.stringify(data.data), 9000)
    })
    .catch((error) => console.log(error))
  }

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
    }, 1500000)
  },[])

  useEffect(() => {
    getProducts()
  },[])

  return (
    <ContainerProducts>
      {products?.map((item) => {
        return (
          <CardProductItem 
            key={item.id} 
            imgUrl={item.imgUrl}
            brand={item.brand}
            model={item.model}
            price={item.price}
          />
        )
      }) }
      {alert}
    </ContainerProducts>
  )
}

export default ProductsScreen