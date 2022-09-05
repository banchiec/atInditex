import { useEffect, useState } from "react"
import { ContainerProducts } from "./styles/productScreenStyled"
import { getWithExpiry } from "../../utils/localStorage"
import CardProductItem from "../../components/Cards/CardProductItem/CardProductItem"

const ProductsScreen = () => {
  const [products, setProducts] = useState([])
  const [alert, setAlert] = useState(null)

  // const getProducts = () => {
  //   productService
  //   .getProducts()
  //   .then((data)=> {
  //     setProducts(data.data)
  //     setWithExpiry('products', JSON.stringify(data.data), 9000)
  //   })
  //   .catch((error) => console.log(error))
  // }
  console.log(getWithExpiry('products'));

  useEffect(() => {
    (localStorage.getItem('products'))? setProducts(localStorage.getItem('products')): setProducts(null)
  },[])

  console.log(products);

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
  // useEffect(() => {
  //   const productsArr = JSON.parse(localStorage.getItem('products'))
  //   if(products){
  //     setProducts(productsArr)
  //   }
  // },[])


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
