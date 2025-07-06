import { Navigate, Route, Routes, useNavigate } from "react-router-dom"

import Catalog from "./routes/client/catalog/catalog"
import ProductsDetails from './routes/client/productsDetails/productDetails'
import ClientHome from "./routes/client"
import Cart from "./routes/client/cart/cartIn"
import { useEffect, useState } from "react"
import { ContextCartCount } from "./utils/contextCount"
import Login from "./routes/client/login/loginIn"
import Admin from "./routes/admin"
import HomeAdmin from "./routes/admin/adminHome/homeAdm"
import { setNavigate } from "./services/navigationService"
import { Privating } from "./components/privating/privating"

import * as authService from "./services/authService"
import { ContextToken } from "./utils/contextToken"
import type { PayloadDto } from "./models/auth"
import { getCart } from "./services/cartService"
import Confirmation from "./routes/confirmation/confirmation"


function App() {
  
  const [contextCartCount, setContextCartCount] = useState<number>(0)
  const [contextTokenPayload, setContextTokenPayload] = useState<PayloadDto>();


  const navigate = useNavigate();

  useEffect(() => {
    setContextCartCount(getCart().items.length)
    if (authService.isAuthenticated()) {
      const payload = authService.getPayload;
      setContextTokenPayload(payload);
    }
  }, []);

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  return (
    <ContextToken.Provider value={{ contextTokenPayload, setContextTokenPayload }}>
      <ContextCartCount.Provider value={{contextCartCount, setContextCartCount}}>
          <Routes>
            <Route path="/" element={<ClientHome/>}>

              <Route index element={<Catalog/>}/>
              <Route path="catalog" element={<Catalog/>}/>
              <Route path="product-details/:productId"  element={<ProductsDetails/>}/> 
              <Route path="cart" element={<Cart/>}/>
              <Route path="login" element={<Login/>}/>

              
              <Route path="confirmation/:orderId"  element={<Privating> <Confirmation/></Privating>}/>
            </Route>
            <Route path="/admin" element={
              <Privating roles={['ROLE_ADMIN']}>
                <Admin/>
              </Privating>
            }>
              <Route index element={<HomeAdmin/>} />
            </Route>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
      </ContextCartCount.Provider>
    </ContextToken.Provider>
  )
}

export default App
