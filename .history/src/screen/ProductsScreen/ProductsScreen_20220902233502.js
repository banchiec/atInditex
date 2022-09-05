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
  const [products, setProducts] = useState(JSON.parse( localStorage.getItem('products')))
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

  console.log(products);
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
      {products?.map((item) => {
        return (
          <div key ={item.key}>
            {item.brand}
          </div>
        )
      }) }

    </ContainerProducts>
  )
}

export default ProductsScreen