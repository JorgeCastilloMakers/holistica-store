import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector(state => state.cart);

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
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default Cart;