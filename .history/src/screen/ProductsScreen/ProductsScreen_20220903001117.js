import { useEffect, useState } from "react"
import { ContainerProducts } from "./styles/productScreenStyled"


console.log((localStorage.getItem('products')))

const ProductsScreen = () => {
  const [products, setProducts] = useState()
  useEffect(() => {
  }, [])

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