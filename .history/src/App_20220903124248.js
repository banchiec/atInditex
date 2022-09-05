import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as path from './utils/paths'
import Header from './components/Header/Header';
import ProductsScreen from './screen/ProductsScreen/ProductsScreen';
import { useEffect } from 'react';
import { getProducts } from './utils/products/products.utils';
import { getWithExpiry } from './utils/localStorage';

function App() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    getProducts()
    setProducts(getWithExpiry('products'))
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
