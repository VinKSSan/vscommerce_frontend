import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Catalog from "./routes/clientHome/catalog/catalog"
import ProductsDetails from './routes/clientHome/productsDetails/productDetails'
import ClientHome from "./routes/clientHome"
import Cart from "./routes/clientHome/cart/cartIn"
import { useState } from "react"
import { ContextCartCount } from "./utils/contextCount"
import Login from "./routes/clientHome/login/loginIn"

function App() {
  
  const [contextCartCount, setContextCartCount] = useState<number>(0)

  return (
    <ContextCartCount.Provider value={{contextCartCount, setContextCartCount}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome/>}>

            <Route index element={<Catalog/>}/>
            <Route path="catalog" element={<Catalog/>}/>
            <Route path="product-details/:productId"  element={<ProductsDetails/>}/> 
            <Route path="cart" element={<Cart/>}/>
            <Route path="login" element={<Login/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </ContextCartCount.Provider>
  )
}

export default App
