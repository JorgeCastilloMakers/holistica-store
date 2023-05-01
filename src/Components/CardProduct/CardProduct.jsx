import './cardProduct.scss'
import { ButtonBlack } from '../Buttons/ButtonBlack/ButtonBlack.jsx';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Actions/cartActions.js'
import { Link } from 'react-router-dom';




export const CardProduct = ({ image, category, name, price, scent, id, setModalMessage, setShowModal }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        if (scent[0] === "") {
            dispatch(addToCart(id, "Sin aroma", 1))
            setShowModal(true);
            setModalMessage("Producto añadido al carrito");
        }
    }

    return (
        <div className='card_product' >
            <Link to={`/products/${id}`} >
                <div className="card_product_image_container">
                    <img className='card_product_image' src={image} alt={`product-image-${name}`} />
                </div>
            </Link>
            <h4 className='card_product_category'>{category}</h4>
            <h2 className="card_product_name">{name}</h2>
            <h2 className="card_product_price">{`$ ${price}`}</h2>
            <ButtonBlack onClick={handleClick} >{scent[0] === "" ? "Añadir al Carrito" : <Link className='link' to={`/products/${id}`}>Ver Opciones</Link>}</ButtonBlack>
        </div>
    )
}
