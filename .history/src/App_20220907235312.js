import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as path from './utils/paths'
import Header from './components/Header/Header';
import ProductsScreen from './screen/ProductsScreen/ProductsScreen';
import { useEffect, useState } from 'react';
import { getProducts } from './utils/products/products.utils';
import DetailsProductScreen from './screen/DetailsProductScreen/DetailsProductScreen';
import { getWithExpiry } from './utils/localStorage';

function App() {

  useEffect(()=>{
    getProducts()
  },[])
  useEffect(() => {
    setCartItems(getWithExpiry('lastProductInCart'))
  }, [getWithExpiry])

  return (
    <Router>
      <Routes>
        <Route path={path.PRODUCTPAGE} element={<ProductsScreen/>} />
        <Route path={path.DETAILSPAGE} element={<DetailsProductScreen/>} />
      </Routes>
    </Router>
  );
}

export default App;
