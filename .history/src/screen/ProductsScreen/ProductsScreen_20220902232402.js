import { useEffect, useState } from "react"
import { ContainerProducts } from "./styles/productScreenStyled"
import ProductsService from '../../services/product.services';

function setWithExpiry(key, value, ttl) {
	const now = new Date()

	// `item` is an object which contains the original value
	// as well as the time when it's supposed to expire
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	}
	localStorage.setItem(key, JSON.stringify(item))
}

function getWithExpiry(key) {
	const itemStr = localStorage.getItem(key)
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem(key)
		return null
	}
	return item.value
}

const ProductsScreen = () => {
  const [products, setProducts] = useState(localStorage.getItem('products'))
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
      <div>ProductsScreen</div>
    </ContainerProducts>
  )
}

export default ProductsScreen