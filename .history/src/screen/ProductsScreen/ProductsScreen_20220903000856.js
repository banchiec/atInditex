import { useEffect, useState } from "react"
import { ContainerProducts } from "./styles/productScreenStyled"


const currentProducts = localStorage.getItem('products')

const ProductsScreen = () => {
  const [products, setProducts] = useState()
  useEffect(() => {
  }, [])
  console.log(currentProducts);

  return (
    <ContainerProducts>
      {/* {products?.map((item) => {
        return (
          <div key={item.id}>
            {item.brand}
          </div>
        )
      }) } */}

    </ContainerProducts>
  )
}

export default ProductsScreen