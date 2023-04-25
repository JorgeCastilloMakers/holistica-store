import { ADD_TO_CART,REMOVE_ONE_FROM_CART, RESET_CART, REMOVE_ALL_FROM_CART } from "../Types";

//

export const addToCart = (id, scent, quantity) => ({type: ADD_TO_CART, payload: id, scent, quantity});

export const removeFromCart = (id) => ({type: REMOVE_ONE_FROM_CART, payload: id});
export const removeAllFromCart = (id, scent) => ({type: REMOVE_ALL_FROM_CART, payload: id, scent});

export const resetCart = () => ({type: RESET_CART});