import './cartItems.scss'
import { AiFillDelete } from "react-icons/ai";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { removeFromCart, addToCart, removeAllFromCart } from '../../../Actions/cartActions.js'
import { useDispatch } from 'react-redux';
import { useState } from 'react';


export const CartItems = ({ clave, id, name, quantity, price, scent, image }) => {
    const dispatch = useDispatch();
    const [productIdToRemove, setProductIdToRemove] = useState(null);

    const addOneProduct = (id, scent) => {
        dispatch(addToCart(id, scent, 1))

    }
    const deleteOneFromCart = (id, scent) => {
        dispatch(removeFromCart(id, scent))
        setProductIdToRemove(null);
    }

    const confirmDelete = (id) => {
        setProductIdToRemove(id);
        if (window.confirm('Are you sure you want to remove this item from your cart?')) {
            deleteOneFromCart(id, scent);
        }
    }
    const deleteAllFromCart = (id, scent) => {
        dispatch(removeAllFromCart(id, scent))
    }




    return (
        <li key={clave} className='cart_item' >
            <h5 className='cart_item_id'>#{id.substring(0, 5)}</h5>
            <div className='cart_item_product'>
                <img className='cart_item_product_image' src={image} alt={name} />
                <h5 className='cart_item_product_name'>{name}</h5>
                <h5 className='cart_item_product_scent'>- {scent}</h5>
            </div>
            <div className='cart_item_quantity'>
                <h5 className='cart_item_quantity_number' >{quantity}</h5>
                <div className='cart_item_quantity_btns'>
                    <button className='cart_item_quantity_btnIcon' onClick={() => addOneProduct(id, scent)}><TbTriangleFilled /></button>
                    <button className='cart_item_quantity_btnIcon down' onClick={() => quantity > 1 ? deleteOneFromCart(id, scent) : confirmDelete(id)}><TbTriangleInvertedFilled /></button>
                </div>
                <button className='cart_item_quantity_btnIcon delete' onClick={() => deleteAllFromCart(id, scent)}>
                    <AiFillDelete />
                </button>
            </div>
            <h5 className='cart_item_price'>$ {price}</h5>



        </li>
    )
}
