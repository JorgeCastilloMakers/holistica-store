import './cartTicket.scss'

export const CartTicket = (product) => {
    const { productId, productName, productScent, productQuantity, productPrice } = product;

    return (
        <div key={productId} className="ticket">
            <div className='ticket_product'>
                <h2 className='ticket_name'>{productName} -</h2>
                <h2 className='ticket_scent'>{productScent}</h2>
                <h3 className='ticket_quantity'>x {productQuantity}</h3>
            </div>
            <h2 className='ticket_price'>$ {productPrice}</h2>

        </div>
    )
}
