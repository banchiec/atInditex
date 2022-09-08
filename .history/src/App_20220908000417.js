import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as path from './utils/paths'
import Header from './components/Header/Header';
import ProductsScreen from './screen/ProductsScreen/ProductsScreen';
import DetailsProductScreen from './screen/DetailsProductScreen/DetailsProductScreen';

function App() {

  const countItemCart = () => {

  }

  return (
    <Router>
      <Header  />
      <Routes>
        <Route path={path.PRODUCTPAGE} element={<ProductsScreen/>} />
        <Route path={path.DETAILSPAGE} element={<DetailsProductScreen/>} countItemCart={countItemCart} />
      </Routes>
    </Router>
  );
}

export default App;
