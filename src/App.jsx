import './App.css'
import { Routes, Route } from 'react-router-dom'

import LayoutApp from './layouts/LayoutApp'
import HomePage from './components/pages/HomePage'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from "./components/Cart/Cart";
import Checkout from "./components/pages/Checkout";

function App() {
  return (
    <LayoutApp>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/category/:categoryId"
          element={<HomePage />}
        />

        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer />}
        />

         <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="*"
          element={<h2>Error 404 - Página no encontrada</h2>}
        />

       

      </Routes>

    </LayoutApp>
  )
}

export default App