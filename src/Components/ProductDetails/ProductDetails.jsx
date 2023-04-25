import { useState } from 'react'
import { ButtonBlack } from '../Buttons/ButtonBlack/ButtonBlack';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Actions/cartActions.js'
import './productDetails.scss'
import { TbSquareRoundedChevronDown, TbSquareRoundedChevronUp } from "react-icons/tb";


export const ProductDetails = ({ cardData }) => {

    const { category, description, image, name, price, scent, id } = cardData;

    const dispatch = useDispatch();
    const [selectedScent, setSelectedScent] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleClick = () => {
        if (scent[0] === "") {
            dispatch(addToCart(id, "Sin aroma", quantity))
        } else if (selectedScent) {
            dispatch(addToCart(id, selectedScent, quantity))
        } else {
            console.log("Please select a scent")
        }

    }

    const handleScentSelect = (event) => {
        setSelectedScent(event.target.value);
    }
    const handleQuantity = (e) => {
        if (e.target.id === "plus") {
            setQuantity(quantity + 1);
        } else {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='detailsCard'>
            <div className='detailsCard_image'>
                <img className='detailsCard_img' src={image} alt={name} />
            </div>
            <div className='detailsCard_info'>
                <h3 className='detailsCard_category'>{category}</h3>
                <h2 className='detailsCard_name'>{name}</h2>
                <p className='detailsCard_description'>
                    {description}
                </p>
                <div className='detailsCard_quantity'>
                    <div className='detailsCard_quantity_handlers'>
                        Cantidad: <span className='detailsCard_quantity_handlers_span'>{quantity}</span>
                        <div className='detailsCard_quantity_handlers_btn'>
                            <button
                                className='detailsCard_quantity_handlers_button'
                                onClick={handleQuantity}><TbSquareRoundedChevronUp id='plus' /></button>
                            <button disabled={quantity <= 1 ? true : false}
                                className='detailsCard_quantity_handlers_button'
                                onClick={handleQuantity}><TbSquareRoundedChevronDown id='minus' /></button>
                        </div>
                    </div>
                    <h2 className='detailsCard_quantity_price'>{`$ ${price}`}</h2>
                </div>
                <div className='detailsCard_scent_add'>
                    {scent[0] !== "" &&
                        <label className='detailsCard_scent_add_label' htmlFor="">
                            Aroma:
                            <select className='detailsCard_scent_add_select' name="" id="" onChange={handleScentSelect} value={selectedScent}>
                                <option className='detailsCard_scent_add_option' value="">Elige una opción</option>
                                {scent.map(option => {
                                    return <option className='detailsCard_scent_add_option' key={option} value={option}>{option}</option>
                                })}
                            </select>
                        </label>}
                    <div className='detailsCard_scent_add_btnAdd' >
                        <ButtonBlack onClick={handleClick}>Añadir al carrito</ButtonBlack>
                    </div>
                </div>
            </div>
        </div>
    )
}
