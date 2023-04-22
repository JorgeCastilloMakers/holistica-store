
import { createStore } from 'redux';
import { cartReducer } from '../Reducers/cartReducer';
import { getProducts } from '../Utils/getProductsFromFB';

export const createStoreAsync = async () => {
  const products = await getProducts();
  const initialState = { products, cart: [] };
  const store = createStore(cartReducer, initialState);
  return store;
};