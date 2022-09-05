import { useEffect, useState } from "react"
import { ContainerProducts } from "./styles/productScreenStyled"



const ProductsScreen = () => {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    if(products === null ){
      setProducts(localStorage.getItem('products'))
    }
  }, [])

  console.log(products);
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