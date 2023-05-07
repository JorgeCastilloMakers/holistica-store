import { useSelector, useDispatch } from 'react-redux';
import { AiFillDelete } from "react-icons/ai";
import './cart.scss'
import { CartItems } from './CartItems/CartItems.jsx';
import { ButtonBW } from '../Buttons/ButtonBW/ButtonBW.jsx'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();


    const handleNavigate = (ruta) => {
        navigate(`/${ruta}`);
    }
    const cartTotal = () => {
        return cart.reduce(
            (acc, cur) => acc + Number(cur.price) * Number(cur.quantity), 0);
    };


    const cartReset = () => {
        Swal.fire({
            text: '¿Estas seguro que deseas vaciar el carrito?',
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#a80202",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#000",
        }).then(res => {
            if (res.isConfirmed) {
                dispatch(resetCart())
            } else {
                return
            }
        })
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
                        <p className='cart_itemsContainer_empty'>Your cart is empty.</p> :
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
                    <button className='cart_foot_btnReset' disabled={cart.length === 0 ? true : false} onClick={() => cartReset()}><AiFillDelete />Vaciar Carrito</button>
                    <div className='cart_foot_total'>
                        <h3 className='cart_foot_total_price'>Total: $ {cartTotal()}</h3>
                        <ButtonBW onClick={() => handleNavigate("products")}>Seguir Comprando</ButtonBW>
                        <button onClick={() => handleNavigate("checkout")} className='cart_foot_total_btnPay' disabled={cart.length === 0 ? true : false}>PAGAR</button>
                    </div>

                </div>


            </div>

        </div>
    );
}

export default Cart;