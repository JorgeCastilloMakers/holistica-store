import { ADD_TO_CART, REMOVE_ONE_FROM_CART, RESET_CART, REMOVE_ALL_FROM_CART } from "../Types/index.js";



const initialState = { products: [], cart: [] };


export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART: {
        let newItem = state.products.find(product => product.id === action.payload);
        let existingItem = state.cart.find(item => item.id === newItem.id && item.scent === action.scent);
        return existingItem 
            ? { 
                ...state, 
                cart: state.cart.map(item => item.id === newItem.id && item.scent === action.scent 
                ? { ...item, quantity: item.quantity + action.quantity } 
                : item
                )
            }
            : { 
                ...state, 
                cart: [
                ...state.cart, 
                { ...newItem, quantity: action.quantity, scent: action.scent }
                ]
            };
        }

        case REMOVE_ONE_FROM_CART: {
        const idToRemove = action.payload;
        const scentToRemove = action.scent;

        const itemToRemove = state.cart.find(item => item.id === idToRemove && item.scent === scentToRemove);
        const updatedItem = {
            ...itemToRemove,
            quantity: itemToRemove.quantity - 1
        };

        const updatedCart = state.cart.map(item => {
            if (item.id === idToRemove && item.scent === scentToRemove) {
            return updatedItem;
            }
            return item;
        });

        return {
            ...state,
            cart: updatedCart,
        };
        }

        case REMOVE_ALL_FROM_CART: {

        const newCart = state.cart.filter(item => !(item.id === action.payload && item.scent === action.scent));
        return {
            ...state,
            cart: newCart,
        };
        }

        case RESET_CART: {
            return initialState;
        }


        default:
            return state;
    }
}

