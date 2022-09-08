import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as path from './utils/paths'
import Header from './components/Header/Header';
import ProductsScreen from './screen/ProductsScreen/ProductsScreen';
import DetailsProductScreen from './screen/DetailsProductScreen/DetailsProductScreen';
import { useEffect } from 'react';

function App() {
  const [counterCart, setCounterCart] = useState(0)
  const countItemCart = () => {

  }
  const handleCounterCart = () => {
    console.log("counter");
  }
  useEffect(() => {
    handleCounterCart()
  }, [counterCart])

  return (
    <Router>
      <Header  />
      <Routes>
        <Route path={path.PRODUCTPAGE} element={<ProductsScreen/>} />
        <Route path={path.DETAILSPAGE} element={<DetailsProductScreen/>} handleCounterCart={handleCounterCart} />
      </Routes>
    </Router>
  );
}

export default App;
