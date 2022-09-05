import { useState } from "react"
import { ContainerProducts } from "./styles/productScreenStyled"
import ProductsService from './services/product.services';

const ProductsScreen = () => {
  const [products, setProducts] = useState([])
  const productService = new ProductsService()

  const getProducts = () => {
    productService
    .getProducts()
    .then((data)=> {
      setProducts(data.data)
      setWithExpiry('products', JSON.stringify(data.data), 5000)
    })
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    setTimeout(() => {
      console.log(getWithExpiry('products'))
    }, 10000)

  },[])

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <ContainerProducts>
      <div>ProductsScreen</div>
    </ContainerProducts>
  )
}

export default ProductsScreen