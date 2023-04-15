import {createContext} from 'react'
import { useProductsList } from '../Hooks/useProductsList.js';


export const ProductsContext = createContext();



export function ProductsContextProvider(props) {
    const products = useProductsList();


  return (
    <ProductsContext.Provider value={{
        products
    }}>
        {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext;