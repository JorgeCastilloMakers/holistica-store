import { useState, useEffect } from 'react'
import { ButtonBlack } from '../../../Components/Buttons/ButtonBlack/ButtonBlack.jsx';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../Actions/cartActions.js'
import './productDetails.scss'
import { TbSquareRoundedChevronDown, TbSquareRoundedChevronUp } from "react-icons/tb";
import { Modalmessage } from '../../ModalMessage/Modalmessage';
import { useParams } from 'react-router-dom';
import { useProductsList } from '../../../Hooks/useProductsList.js'
import { Breadcrums } from '../../Breadcrums/Breadcrums.jsx'

export const ProductDetails = () => {

    const [selectedScent, setSelectedScent] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();
    const dispatch = useDispatch();
    const products = useProductsList();

    useEffect(() => {

        if (products.length > 0) {
            setIsLoading(false);
        }
    }, [products]);

    const productData = products.filter(product => product.id === id);

    const handleClick = () => {
        if (productData[0].scent[0] === "") {
            dispatch(addToCart(id, "Sin aroma", quantity))
        } else if (selectedScent) {
            dispatch(addToCart(id, selectedScent, quantity))
        } else {
            setShowModal(true);
            setModalMessage("Debes elegir un aroma");
            return;
        }
        setShowModal(true);
        setModalMessage("Producto añadido al carrito");
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

    useEffect(() => {
        if (showModal) {
            setTimeout(() => {
                setShowModal(false);
                setModalMessage("");
            }, 2000);
        }
    }, [showModal]);


    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <div className='details'>

            <Breadcrums category={productData[0].category} name={productData[0].name} style={{ paddingLeft: "2%" }}></Breadcrums>
            <div className='detailsCard'>

                {showModal && (
                    <Modalmessage message={modalMessage} />
                )}

                <div className='detailsCard_image'>
                    <img className='detailsCard_img' src={productData[0].image} alt={productData[0].name} />
                </div>
                <div className='detailsCard_info'>
                    <h3 className='detailsCard_category'>{productData[0].category}</h3>
                    <h2 className='detailsCard_name'>{productData[0].name}</h2>
                    <p className='detailsCard_description'>
                        {productData[0].description}
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
                        <h2 className='detailsCard_quantity_price'>{`$ ${productData[0].price}`}</h2>
                    </div>
                    <div className='detailsCard_scent_add'>
                        {productData[0].scent[0] !== "" &&
                            <label className='detailsCard_scent_add_label' htmlFor="">
                                Aroma:
                                <select className='detailsCard_scent_add_select' name="" id="" onChange={handleScentSelect} value={selectedScent}>
                                    <option className='detailsCard_scent_add_option' value="">Elige una opción</option>
                                    {productData[0].scent.map(option => {
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
        </div>
    )
}
