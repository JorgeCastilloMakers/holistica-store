import { useState } from 'react'
import { ButtonBlack } from '../Buttons/ButtonBlack/ButtonBlack';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Actions/cartActions.js'
import { useParams } from 'react-router-dom';

export const ProductDetails = ({ cardData }) => {

    const { category, description, image, name, price, scent, id } = cardData;

    const dispatch = useDispatch();
    const [selectedScent, setSelectedScent] = useState("");

    const handleClick = () => {
        if (scent[0] === "") {
            dispatch(addToCart(id, "Sin aroma"))
            console.log("add")
        } else if (selectedScent) {
            dispatch(addToCart(id, selectedScent))
            console.log("add")
        } else {
            console.log("Please select a scent")
        }

    }

    const handleScentSelect = (event) => {
        setSelectedScent(event.target.value);
    }


    return (
        <div style={{ display: "flex" }}>
            <div>
                <img src={image} style={{ maxWidth: "400px" }} alt={name} />
            </div>
            <div>
                <h3>{category}</h3>
                <h2>{name}</h2>
                <p>
                    {description}
                </p>
                <div>
                    <div>Cantidad</div>
                    <h2>{`$ ${price}`}</h2>
                </div>
                <div>
                    {scent[0] !== "" &&
                        <label htmlFor="">
                            Aroma:
                            <select name="" id="" onChange={handleScentSelect} value={selectedScent}>

                                {scent.map(option => {
                                    return <option key={option} value={option}>{option}</option>
                                })}
                            </select>
                        </label>}
                    <ButtonBlack onClick={handleClick}>Añadir al carrito</ButtonBlack>
                </div>
            </div>
        </div>
    )
}
