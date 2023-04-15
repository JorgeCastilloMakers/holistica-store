import './cardProduct.scss'
import { ButtonBlack } from '../Buttons/ButtonBlack/ButtonBlack.jsx'

export const CardProduct = ({ image, category, name, price, scent }) => {
    // const { image, category, name, price, scent, id } = children;

    return (
        <div className='card_product' >
            <div className="card_product_image_container">
                <img className='card_product_image' src={image} alt={`product-image-${name}`} />
            </div>
            <h4 className='card_product_category'>{category}</h4>
            <h2 className="card_product_name">{name}</h2>
            <h2 className="card_product_price">{`$ ${price}`}</h2>
            <ButtonBlack>{scent[0] = "" ? "Añadir al Carrito" : "Ver Opciones"}</ButtonBlack>
        </div>
    )
}
