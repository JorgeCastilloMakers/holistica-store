import './cardProduct.scss'
import { ButtonBlack } from '../Buttons/ButtonBlack/ButtonBlack.jsx';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Actions/cartActions.js'





export const CardProduct = ({ image, category, name, price, scent, description, id, setShowDetails, setSelectedProduct, setModalMessage, setShowModal }) => {
    const dispatch = useDispatch();


    const handleClick = () => {
        if (scent[0] === "") {
            dispatch(addToCart(id, "Sin aroma", 1))
            setShowModal(true);
            setModalMessage("Producto añadido al carrito");
        } else {
            setShowDetails(true)
            setSelectedProduct({
                image,
                category,
                name,
                price,
                scent,
                description,
                id
            })


        }

    }
    const handleClickImage = () => {
        setShowDetails(true)
        setSelectedProduct({
            image,
            category,
            name,
            price,
            scent,
            description,
            id

        })

    }

    return (
        <div className='card_product' >
            <div className="card_product_image_container" onClick={handleClickImage}>
                <img className='card_product_image' src={image} alt={`product-image-${name}`} />
            </div>
            <h4 className='card_product_category'>{category}</h4>
            <h2 className="card_product_name">{name}</h2>
            <h2 className="card_product_price">{`$ ${price}`}</h2>
            <ButtonBlack onClick={handleClick} >{scent[0] === "" ? "Añadir al Carrito" : "Ver Opciones"}</ButtonBlack>
        </div>
    )
}
