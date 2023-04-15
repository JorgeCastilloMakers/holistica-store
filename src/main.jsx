import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ProductsContextProvider } from './Context/ProductsContext';
import './main.scss';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
