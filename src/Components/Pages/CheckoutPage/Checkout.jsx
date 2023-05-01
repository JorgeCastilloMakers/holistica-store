import './checkout.scss'
import { Link } from 'react-router-dom';
import { CartTicket } from './CartTicket/CartTicket.jsx'
import { useSelector } from 'react-redux';
import { ButtonBlack } from '../../Buttons/ButtonBlack/ButtonBlack.jsx'

export const Checkout = () => {
    const cart = useSelector(state => state.cart);
    const provinciasArgentina = [
        "Buenos Aires",
        "Buenos Aires - CABA",
        "Catamarca",
        "Chaco",
        "Chubut",
        "Córdoba",
        "Corrientes",
        "Entre Ríos",
        "Formosa",
        "Jujuy",
        "La Pampa",
        "La Rioja",
        "Mendoza",
        "Misiones",
        "Neuquén",
        "Río Negro",
        "Salta",
        "San Juan",
        "San Luis",
        "Santa Cruz",
        "Santa Fe",
        "Santiago del Estero",
        "Tierra del Fuego",
        "Tucumán"
    ];


    return (
        <div className='checkout'>
            <h2 className='checkout_title'>Finalizar Compra</h2>
            <div className='checkout_container'>
                <div className='checkout_form_container'>
                    <h2 className='checkout_form_container_login'>¿Ya eres cliente? <Link className='checkout_form_container_login_link'>Haz clic aquí para acceder</Link></h2>
                    <form className='checkout_form'>
                        <h2 className='checkout_form_title'>Detalles de Facturación</h2>
                        <hr className='checkout_form_hr' />
                        <div className='checkout_form_inputs_container'>
                            <label className='checkout_form_label' htmlFor="name">
                                Nombre
                                <small className='checkout_form_label_error'>{""}</small>
                                <input className='checkout_form_input' type="text" name='name' />
                            </label>
                            <label className='checkout_form_label' htmlFor="lastname">
                                Apellido
                                <small className='checkout_form_label_error'>{""}</small>
                                <input className='checkout_form_input' type="text" name='lastname' />
                            </label>
                        </div>
                        <label className='checkout_form_label' htmlFor="country">
                            País
                            <small className='checkout_form_label_error'>{""}</small>
                            <input placeholder='Argentina' className='checkout_form_input country' type="text" name='country' />
                        </label>
                        <label className='checkout_form_label' htmlFor="address">
                            Dirección
                            <small className='checkout_form_label_error'>{""}</small>
                            <input className='checkout_form_input' type="text" name='address' />
                        </label>
                        <div className='checkout_form_inputs_container'>
                            <label className='checkout_form_label' htmlFor="state">
                                Provincia
                                <small className='checkout_form_label_error'>{""}</small>
                                <select className='checkout_form_select' name="state" id="state">
                                    {provinciasArgentina.map(provincia => {
                                        return <option className='checkout_form_select_option' value={provincia}>{provincia}</option>
                                    })}
                                </select>
                            </label>
                            <label className='checkout_form_label' htmlFor="cp">
                                Código Postal
                                <small className='checkout_form_label_error'>{""}</small>
                                <input className='checkout_form_input' type="text" name='cp' />
                            </label>
                        </div>
                        <div className='checkout_form_inputs_container'>
                            <label className='checkout_form_label' htmlFor="phone">
                                Teléfono
                                <small className='checkout_form_label_error'>{""}</small>
                                <input className='checkout_form_input' type="text" name='phone' />
                            </label>
                            <label className='checkout_form_label' htmlFor="email">
                                Email
                                <small className='checkout_form_label_error'>{""}</small>
                                <input className='checkout_form_input' type="text" name='email' />
                            </label>
                        </div>
                        <label className='checkout_form_label' htmlFor="note">
                            Nota Adicional:
                            <input className='checkout_form_input' type="text" name='note' />
                        </label>
                    </form>
                </div>
                <div className='checkout_ticket_container'>
                    <div className='checkout_ticket'>
                        <h2 className='checkout_ticket_title'>Tu Pedido:</h2>
                        <h3 className='checkout_ticket_heads'>Producto <span>Subtotal</span></h3>
                        <hr className='checkout_ticket_hr' />
                        <li className='checkout_ticket_list' >
                            {
                                cart.map(item => (
                                    <CartTicket
                                        product={item.id}
                                        productName={item.name}
                                        productScent={item.scent}
                                        productQuantity={item.quantity}
                                        productPrice={item.price} />
                                ))
                            }
                        </li>
                        <h2 className='checkout_ticket_total' >Total <span>$5150</span></h2>
                        <hr className='checkout_ticket_hr' />
                    </div>
                    <div className='checkout_payMethods'>
                        <h2 className='checkout_payMethods_title'>Medio de Pago</h2>
                        <div className='checkout_payMethods_labels'>
                            <label className='checkout_payMethods_label' htmlFor="paymethod">
                                <input className='checkout_payMethods_input' type="radio" name="paymethod" id="efectivo" value="efectivo" />
                                Efectivo
                            </label>
                            <label className='checkout_payMethods_label' htmlFor="paymethod">
                                <input className='checkout_payMethods_input' type="radio" name="paymethod" id="transferencia" value="transferencia" />
                                Transferencia
                            </label>
                            <label className='checkout_payMethods_label' htmlFor="paymethod">
                                <input className='checkout_payMethods_input' type="radio" name="paymethod" id="credito" value="credito" />
                                Tarjeta de Crédito
                            </label>
                        </div>
                    </div>
                    <ButtonBlack>Realizar Pedido</ButtonBlack>
                </div>

            </div>
        </div>
    )
}
