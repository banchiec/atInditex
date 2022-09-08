import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as path from './utils/paths'
import Header from './components/Header/Header';
import ProductsScreen from './screen/ProductsScreen/ProductsScreen';
import DetailsProductScreen from './screen/DetailsProductScreen/DetailsProductScreen';
import { useEffect, useState } from 'react';

let counter = 0

function App() {
  const [counterCart, setCounterCart] = useState(0)
  
  useEffect(() => {
    handleCounterCart()
  }, [])

  const handleCounterCart = (valor) => {
    // setCounterCart(valor)
    if(valor){
      counter++
    }
  }

  console.log(counter);

  return (
    <Router>
      <Header  />
      <Routes>
        <Route path={path.PRODUCTPAGE} element={<ProductsScreen/>} />
        <Route path={path.DETAILSPAGE} element={<DetailsProductScreen handleCounterCart={handleCounterCart} />}  />
      </Routes>
    </Router>
  );
}

export default App;
