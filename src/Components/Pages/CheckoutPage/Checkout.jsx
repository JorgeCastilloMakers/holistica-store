import './checkout.scss'
import { Link } from 'react-router-dom';
import { CartTicket } from './CartTicket/CartTicket.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { ButtonBlack } from '../../Buttons/ButtonBlack/ButtonBlack.jsx'
import { useAuth } from '../../../Context/AuthContext'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import { useUpload } from '../../../Hooks/useUpload.js'
import Swal from 'sweetalert2'
import { resetCart } from '../../../Actions/cartActions.js'
import { useNavigate } from 'react-router-dom';


export const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [billingData, setBillingData] = useState({
        name: "",
        lastname: "",
        country: "",
        address: "",
        state: "",
        cp: "",
        phone: "",
        email: "",
        note: "",
        payment: paymentMethod
    });

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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useAuth();

    const cartTotal = () => {
        return cart.reduce(
            (acc, cur) => acc + Number(cur.price) * Number(cur.quantity), 0);
    };

    const order = {
        orderID: uuidv4().substr(0, 6),
        totalPrice: cartTotal(),
        items: cart.map(item => {
            return { product: item.name, scent: item.scent, quantity: item.quantity }
        }),
        payment: paymentMethod
    }
    const uploadOrder = useUpload();

    const handlePay = (order) => {
        if (user) {
            if (paymentMethod === "") {
                Swal.fire({
                    text: 'Por favor selecciona un medio de pago',
                    timer: '2000',
                    position: 'center',
                    confirmButtonColor: "#000",
                })
                return;
            }
            uploadOrder(order);
            dispatch(resetCart())
            Swal.fire({
                text: 'Gracias por tu compra',
                icon: 'success',
                timer: '2000',
                position: 'center',
                confirmButtonColor: "#000"
            })
            navigate("/products")
        } else {
            Swal.fire({
                text: 'Por favor inicia sesión para continuar con el pago',
                timer: '2000',
                position: 'center',
                confirmButtonColor: "#000",
            })
            return;
        }
        return
    }

    const handleChange = (e) => {
        e.preventDefault;
        setBillingData({ ...billingData, [name]: value })
    }

    return (
        <div className='checkout'>
            <h2 className='checkout_title'>Finalizar Compra</h2>
            <div className='checkout_container'>
                <div className='checkout_form_container'>
                    {!user && <h2 className='checkout_form_container_login'>¿Ya eres cliente? <Link to={"/auth"} className='checkout_form_container_login_link'>Haz clic aquí para acceder</Link></h2>}

                    <form className='checkout_form'>
                        <h2 className='checkout_form_title'>Detalles de Facturación</h2>
                        <hr className='checkout_form_hr' />
                        <div className='checkout_form_inputs_container'>
                            <label className='checkout_form_label' htmlFor="name">
                                Nombre
                                <input className='checkout_form_input' type="text" name='name' value={user ? user.name : ""} onChange={handleChange} />
                            </label>
                            <label className='checkout_form_label' htmlFor="lastname">
                                Apellido
                                <input className='checkout_form_input' type="text" name='lastname' value={user ? user.lastname : ""} onChange={handleChange} />
                            </label>
                        </div>
                        <label className='checkout_form_label' htmlFor="country">
                            País
                            <input placeholder='Argentina' className='checkout_form_input country' type="text" name='country' defaultValue={"Argentina"} onChange={handleChange} />
                        </label>
                        <label className='checkout_form_label' htmlFor="address">
                            Dirección
                            <input className='checkout_form_input' type="text" name='address' value={user ? user.address : ""} onChange={handleChange} />
                        </label>
                        <div className='checkout_form_inputs_container'>
                            <label className='checkout_form_label' htmlFor="state">
                                Provincia
                                <select className='checkout_form_select' name="state" id="state" value={user ? user.state : ""} onChange={handleChange} >
                                    {provinciasArgentina.map(provincia => {
                                        return <option className='checkout_form_select_option' value={provincia}>{provincia}</option>
                                    })}
                                </select>
                            </label>
                            <label className='checkout_form_label' htmlFor="cp">
                                Código Postal
                                <input className='checkout_form_input' type="text" name='cp' onChange={handleChange} />
                            </label>
                        </div>
                        <div className='checkout_form_inputs_container'>
                            <label className='checkout_form_label' htmlFor="phone">
                                Teléfono
                                <input className='checkout_form_input' type="text" name='phone' onChange={handleChange} />
                            </label>
                            <label className='checkout_form_label' htmlFor="email">
                                Email
                                <input className='checkout_form_input' type="text" name='email' value={user ? user.email : ""} onChange={handleChange} />
                            </label>
                        </div>
                        <label className='checkout_form_label' htmlFor="note">
                            Nota Adicional:
                            <input className='checkout_form_input' type="text" name='note' onChange={handleChange} />
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
                        <h2 className='checkout_ticket_total' >Total: <span>$ {cartTotal()}</span></h2>
                        <hr className='checkout_ticket_hr' />
                    </div>
                    <div className='checkout_payMethods'>
                        <h2 className='checkout_payMethods_title'>Medio de Pago</h2>
                        <div className='checkout_payMethods_labels'>
                            <label className='checkout_payMethods_label' htmlFor="paymethod">
                                <input className='checkout_payMethods_input' type="radio" name="paymethod" id="efectivo" value="efectivo" onChange={(e) => setPaymentMethod(e.target.value)} />
                                Efectivo
                            </label>
                            <label className='checkout_payMethods_label' htmlFor="paymethod">
                                <input className='checkout_payMethods_input' type="radio" name="paymethod" id="transferencia" value="transferencia" onChange={(e) => setPaymentMethod(e.target.value)} />
                                Transferencia
                            </label>
                            <label className='checkout_payMethods_label' htmlFor="paymethod">
                                <input className='checkout_payMethods_input' type="radio" name="paymethod" id="credito" value="credito" onChange={(e) => setPaymentMethod(e.target.value)} />
                                Tarjeta de Crédito
                            </label>
                        </div>
                    </div>
                    <ButtonBlack style={{ alignSelf: "flex-end" }} onClick={() => handlePay(order)}>Realizar Pedido</ButtonBlack>
                </div>

            </div>
        </div>
    )
}
