import {combineReducers} from 'redux';
import { cartReducer } from './cartReducer';

const reducer = combineReducers({
    cart: cartReducer,
});
console.log(reducer)

export default reducer;