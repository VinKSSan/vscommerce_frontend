import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Catalog from "./routes/clientHome/catalog/catalog"
import ProductsDetails from './routes/clientHome/productsDetails/productDetails'
import ClientHome from "./routes/clientHome"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome/>}>

          <Route index element={<Catalog/>}/>
          <Route path="catalog" element={<Catalog/>}/>
          <Route path="product-details/:productId"  element={<ProductsDetails/>}/> 
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
