import './modalMessage.scss'



export const Modalmessage = ({ message }) => {
    return (
        <div className='modal'>
            <div className='modal_message'>
                <h2 className='modal_text'>
                    {message}
                </h2>
                {message === "Producto añadido al carrito" ?
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">

                        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />

                    </svg>
                    :
                    <svg className="reject_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle className="reject_icon_circle" cx="26" cy="26" r="25" fill="none" />
                        <path className="reject_icon_cross" fill="none" d="M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8" />
                    </svg>
                }
            </div>

        </div>
    )
}
