import { ADD_TO_CART,REMOVE_ONE_FROM_CART, RESET_CART } from "../Types";

export const addToCart = id => ({type: ADD_TO_CART, payload: id});

export const removeFromCart = (id) => ({type: REMOVE_ONE_FROM_CART, payload: id});

export const resetCart = () => ({type: RESET_CART});