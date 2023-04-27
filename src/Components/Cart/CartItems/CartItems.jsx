import './cartItems.scss'
import { AiFillDelete } from "react-icons/ai";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

export const CartItems = ({ clave, id, name, quantity, price, scent, image }) => {
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
                    <button className='cart_item_quantity_btnIcon down' onClick={() => quantity > 1 ? deleteOneFromCart(id) : confirmDelete(id)}><TbTriangleInvertedFilled /></button>
                </div>
                <button className='cart_item_quantity_btnIcon delete' onClick={() => deleteAllFromCart(id, scent)}>
                    <AiFillDelete />
                </button>
            </div>
            <p>$ {price}</p>



        </li>
    )
}
