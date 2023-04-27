import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillDelete } from "react-icons/ai";
import { removeFromCart, resetCart, addToCart, removeAllFromCart } from '../../Actions/cartActions.js'
import './cart.scss'
import { CartItems } from './CartItems/CartItems.jsx';
import { ButtonBW } from '../Buttons/ButtonBW/ButtonBW.jsx'

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
        <div className='cart_page'>
            <h2 className='cart_page_title'>Carrito</h2>
            <div className="cart">
                <div className="cart_heads">
                    <h3 className='cart_heads_titles'>ID</h3>
                    <h3 className='cart_heads_titles'>PRODUCTO</h3>
                    <h3 className='cart_heads_titles'>CANTIDAD</h3>
                    <h3 className='cart_heads_titles price'>PRECIO</h3>
                </div>
                <div className="cart_itemsContainer">

                    {cart.length === 0 ?
                        <p>Your cart is empty.</p> :
                        <ul className="cart_itemsContainer_list">
                            {cart.map(item => (
                                <CartItems
                                    clave={`${item.id}+${item.scent}`}
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    scent={item.scent}
                                    quantity={item.quantity}
                                    price={item.price}
                                ></CartItems>
                            ))}
                        </ul>
                    }
                </div>
                <div className='cart_foot'>
                    <button className='cart_foot_btnReset' onClick={() => cartReset()}><AiFillDelete />Vaciar Carrito</button>
                    <div className='cart_foot_total'>
                        <h3 className='cart_foot_total_price'>Total: $ {cartTotal()}</h3>
                        <ButtonBW>Seguir Comprando</ButtonBW>
                        <button className='cart_foot_total_btnPay'>PAGAR</button>
                    </div>

                </div>


            </div>

        </div>
    );
}

export default Cart;