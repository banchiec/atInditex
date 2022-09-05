import { useEffect, useState } from "react"
import { ContainerProducts } from "./styles/productScreenStyled"
import ProductsService from '../../services/product.services';

function setWithExpiry(key, value, ttl) {
	const now = new Date()
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	}
	localStorage.setItem(key, JSON.stringify(item))
}

function getWithExpiry(key) {
	const itemStr = localStorage.getItem(key)
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	if (now.getTime() > item.expiry) {
		localStorage.removeItem(key)
		return null
	}
	return item.value
}

const ProductsScreen = () => {
  const [products, setProducts] = useState([])
  const productService = new ProductsService()

  const getProducts = () => {
    productService
    .getProducts()
    .then((data)=> {
      setWithExpiry('products', JSON.stringify(data.data), 9000)
      setProducts(data.data)
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
  }, [products])

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