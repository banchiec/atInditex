import { useEffect, useState } from "react"
import { ContainerProducts, Filter, Search } from "./styles/productScreenStyled"
import { getWithExpiry } from "../../utils/localStorage"
import CardProductItem from "../../components/Cards/CardProductItem/CardProductItem"
import Loader from "../../components/Loaders/Loader"

const ProductsScreen = () => {
  const [products, setProducts] = useState(null)
  const [value, setValue] = useState('')
  const [alert, setAlert] = useState(null)


  useEffect(()=> {
    setTimeout(() => {
      setProducts(getWithExpiry('products'));
    }, 3000);
  },[])

  useEffect(() => {
    setTimeout(() => {
      if(getWithExpiry('products') === null){
        setAlert(
          <div>
            <h1>Es necesario volver a solicitar la información</h1>
          </div>
        )
        setProducts([])
      }
    }, 3600000)
  },[])

  console.log(value);

  return (
    <div>
      <Filter>
        <h4>LIST ITEM</h4>
        <Search 
          type='text' 
          placeholder="SEARCH"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Filter>
      <ContainerProducts>
        { !products ? (
          <Loader/>
        ):(
          products?.map((item) => {
            return (
              <CardProductItem 
                key={item.id} 
                imgUrl={item.imgUrl}
                brand={item.brand}
                model={item.model}
                price={item.price}
              />
            )
        })) }
        {alert}
      </ContainerProducts>
    </div>
  )
}

export default ProductsScreen
