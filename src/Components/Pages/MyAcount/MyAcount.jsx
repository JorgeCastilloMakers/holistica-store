import { useState } from 'react'
import './myAcount.scss'
import { useAuth } from '../../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'


export const MyAcount = () => {
    const { user, logOut, loading } = useAuth();
    const navigate = useNavigate();

    const [billingData, setBillingData] = useState({
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        country: user.country,
        state: user.state,
        address: user.address,
        orders: user.orders
    });
    const [editEnabled, setEditEnabled] = useState(false)

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
    const handleLogOut = () => {
        logOut();
        navigate("/");
    }

    if (loading) {
        return (<h2>Loading....</h2>)
    }



    return (
        <div className='myAcount'>Mi Cuenta
            <h2>Hola, {user.name} {user.lastname}</h2>
            <img style={{ maxWidth: "100px" }} src={`${user.profilePicture}`} alt="" />
            <h3>Su correo registrado es: {user.email}</h3>
            <h3>Datos de Facturación</h3> <button onClick={() => setEditEnabled(!editEnabled)}>Editar Datos</button>
            <ul>
                <li key={1}>Nombre: {billingData.name}</li>
                <li key={2}>Apellido: {billingData.lastname}</li>
                <li key={3}>Email: {billingData.email}</li>
                <li key={4}>País: {billingData.country}</li>
                <li key={5}>Provincia: {billingData.state}</li>
                <li key={6}>Dirección: {billingData.address}</li>
                <li key={7}>
                    Pedidos:
                    {billingData.orders.length === 0 ? (
                        <p>"Aun no has realizado ninguna compra"</p>
                    ) : (
                        <ul>
                            {billingData.orders.map((order) => (
                                <li key={order.id}>
                                    <div>
                                        <p>#{order.orderID}</p>
                                        <ul>
                                            {order.items.map((item) => (
                                                <li key={item.name}>
                                                    <div>
                                                        <p>{item.name}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <p>#{order.totalPrice}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            </ul>
            {editEnabled &&
                <form>
                    <h3>Completa tus datos de facturación</h3>
                    <label htmlFor="name" >
                        Nombre
                        <input type="text" name='name' />
                    </label>
                    <label htmlFor="lastname" >
                        Apellido
                        <input type="text" name='lastname' />
                    </label>
                    <label htmlFor="country" >
                        País
                        <input type="text" name='country' defaultValue={"Argentina"} readOnly />
                    </label>
                    <label htmlFor="lastname" >
                        Provincia
                        {/* {touched.password && <small >{errors.state}</small>} */}
                        <select name="state" id="state" >
                            {provinciasArgentina.map(provincia => {
                                return <option value={provincia}>{provincia}</option>
                            })}
                        </select>
                    </label>
                    <label htmlFor="address" >
                        Dirección
                        {/* {touched.password && <small className='register_form_error'>{errors.address}</small>} */}
                        <input type="text" name='address' />
                    </label>
                </form>
            }
            <button onClick={() => handleLogOut()}>Cerrar Sesión</button>
        </div>
    )
}
