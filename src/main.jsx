import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ProductsContextProvider } from './Context/ProductsContext';
import './main.scss';
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './Context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductsContextProvider>
          <App />
        </ProductsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
