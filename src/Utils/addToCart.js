import { useDispatch } from 'react-redux'

export const addToCartClick = ({ cardData }) => {
    
        const dispatch = useDispatch();
           const {  scent, id } = cardData;
        console.log(cardData)


        if (scent[0] === "") {
            dispatch(addToCart(id))
                (console.log("add"))

        } else {
            setShowDetails(true)
            setSelectedProduct({
                image,
                category,
                name,
                price,
                scent,
                description
            })

        }
        return
    }