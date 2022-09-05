import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as path from './utils/paths'
import Header from './components/Header/Header';
import ProductsScreen from './screen/ProductsScreen/ProductsScreen';
import ProductsService from './services/product.services';
import { useEffect } from 'react';

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

function App() {

  const productService = new ProductsService()

  const getProducts = () => {
    productService
    .getProducts()
    .then((data)=> {
      setWithExpiry('products', JSON.stringify(data.data), 9000)
    })
    .catch((error) => console.log(error))
  }
  useEffect(() => {
    getProducts()
  },[])

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path={path.PRODUCTPAGE} element={<ProductsScreen/>} />
        <Route path={path.DETAILSPAGE} element={<ProductsScreen/>} />
      </Routes>
    </Router>
  );
}

export default App;
