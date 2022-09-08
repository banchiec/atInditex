import { useEffect, useState } from "react"
import CardProductItem from "../../components/Cards/CardProductItem/CardProductItem"
import Loader from "../../components/Loaders/Loader"
import { getProducts } from "../../utils/products/products.utils"
import { getWithExpiry } from "../../utils/localStorage"
import { ContainerProducts, Filter, Search } from "./styles/productScreenStyled"
import AlertStorage from "../../components/Alerts/AlertStorage/AlertStorage"

const ProductsScreen = () => {
  const [products, setProducts] = useState(null)
  const [productsSearch, setProductsSearch] = useState([])
  const [value, setValue] = useState('')
  const [alert, setAlert] = useState(null)

  useEffect(() => {
    getProducts()
  },[])
  useEffect(()=> {
    setTimeout(() => {
      setProducts(getWithExpiry('products'));
      setProductsSearch(getWithExpiry('products'))
    }, 2000);
  },[])
  useEffect(() => {
    setTimeout(() => {
      if(getWithExpiry('products') === null){
        setAlert(
          <AlertStorage
            text='Es necesario recargar los datos'
          />
        )
        setProducts([])
      }
    }, 11000)
  },[])

  const handleGetProduct = (e) => {
    setValue(e.target.value)
    filter(e.target.value)
  }
  const filter = (searchText) => {
    let resutlsSearch = productsSearch.filter((product) => {
      if(product.brand.toString().toLowerCase().includes(searchText.toLowerCase())
        || product.model.toString().toLowerCase().includes(searchText.toLowerCase())){
        return product
      }
    })
    setProducts(resutlsSearch)
  }
  return (
    <div>
      <Filter>
        <h4>LIST ITEM</h4>
        <Search 
          type='text' 
          placeholder="SEARCH"
          value={value}
          onChange={(e) => handleGetProduct(e)}
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
                id = {item.id}
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
