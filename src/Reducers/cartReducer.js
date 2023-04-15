import { ADD_TO_CART,REMOVE_ONE_FROM_CART, RESET_CART } from "../types";
//falta traer los productos


const initialState = {products, cart: []};


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:{
            let newItem = state.products.find(product => product.id === action.payload)
            
            let existingItem = state.cart.find(item => item.id === newItem.id)
            return existingItem ? {...state, cart: state.cart.map(item => item.id === newItem.id ? {...item, quantity: item.quantity + 1 }: item)} 
            : {...state, cart:[...state.cart, {...newItem, quantity: 1}],}

        }

        case REMOVE_ONE_FROM_CART:{
            let itemRemove = state.cart.find(item => item.id === action.payload);
            return itemRemove.quantity > 1 ? {
                ...state, cart: state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity -1} : item)
            } : {
                ...state, cart: state.cart.filter(item => item.id !== action.payload)
            };

        }
           

        case RESET_CART:{
           return initialState; 
        }
            
               
        default:
            return state;
    }
}