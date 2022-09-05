import { useEffect, useState } from "react"
import { ContainerProducts } from "./styles/productScreenStyled"



const ProductsScreen = () => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')))
  useEffect(() => {
  }, [])

  console.log(products);
  return (
    <ContainerProducts>
      {products?.map((item) => {
        return (
          <div key={item.id}>
            {item.brand}
          </div>
        )
      }) }

    </ContainerProducts>
  )
}

export default ProductsScreen