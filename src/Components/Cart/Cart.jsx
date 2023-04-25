import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillDelete } from "react-icons/ai";
import { removeFromCart, resetCart, addToCart, removeAllFromCart } from '../../Actions/cartActions.js'


const Cart = () => {
    const dispatch = useDispatch();
    const [productIdToRemove, setProductIdToRemove] = useState(null);
    const cart = useSelector(state => state.cart);

    const cartTotal = () => {
        return cart.reduce(
            (acc, cur) => acc + Number(cur.price) * Number(cur.quantity), 0);
    };

    const addOneProduct = (id, scent) => {
        dispatch(addToCart(id, scent, 1))

    }
    const deleteOneFromCart = (id) => {
        dispatch(removeFromCart(id))
        setProductIdToRemove(null);
    }

    const confirmDelete = (id) => {
        setProductIdToRemove(id);
        if (window.confirm('Are you sure you want to remove this item from your cart?')) {
            deleteOneFromCart(id);
        }
    }
    const cartReset = () => {
        if (window.confirm('Are you sure you want to reset your cart?')) {
            dispatch(resetCart())
        }
    }
    const deleteAllFromCart = (id, scent) => {
        console.log(id)
        dispatch(removeAllFromCart(id, scent))
    }

    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ?
                <p>Your cart is empty.</p> :
                <ul>
                    {cart.map(item => (
                        <li key={`${item.id}-${item.scent}`}>
                            <p>{item.name}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: {item.price}</p>
                            <p>Scent: {item.scent}</p>

                            <button onClick={() => addOneProduct(item.id, item.scent)}>sumar</button>
                            <button onClick={() => item.quantity > 1 ? deleteOneFromCart(item.id) : confirmDelete(item.id)}>restar</button>
                            <button onClick={() => deleteAllFromCart(item.id, item.scent)}>
                                <AiFillDelete /></button>
                        </li>

                    ))}
                </ul>

            }
            <h3>Total: $ {cartTotal()}</h3>
            <button onClick={() => cartReset()}>resetear carrito</button>
        </div>
    );
}

export default Cart;