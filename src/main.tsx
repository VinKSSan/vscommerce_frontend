import { StrictMode } from 'react'
import { BrowserRouter} from "react-router-dom"

import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
