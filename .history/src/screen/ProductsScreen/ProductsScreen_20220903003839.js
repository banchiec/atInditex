import { useEffect, useState } from "react"
import { ContainerProducts } from "./styles/productScreenStyled"
import ProductsService from "../../services/product.services"
import { setWithExpiry, getWithExpiry } from "../../utils/localStorage"



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
          <h1>Error</h1>
        )
      }
      console.log(getWithExpiry('products'))
    }, 10000)
  },[])
  console.log(products);
  useEffect(() => {
    getProducts()
  },[])
  return (
    <ContainerProducts>
      {/* {products?.map((item) => {
        return (
          <div key={item.id}>
            {item.brand}
          </div>
        )
      }) } */}
      {alert}

    </ContainerProducts>
  )
}

export default ProductsScreen