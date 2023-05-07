import { useState } from 'react'
import './myAcount.scss'
import { useAuth } from '../../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { EditForm } from './EditForm/EditForm';

export const MyAcount = () => {
    const { user, logOut, loading } = useAuth();
    const navigate = useNavigate();

    const [billingData, setBillingData] = useState({ ...user });
    const [editEnabled, setEditEnabled] = useState(false);


    const handleLogOut = () => {
        logOut();
        navigate('/');
    };

    if (loading) {
        return <h2>Loading....</h2>;
    }



    return (
        <div className='myAcount'>
            <div className='myAcount_data'>
                <h2 className='myAcount_data_title'>Mi Cuenta</h2>
                <div className='myAcount_data_profile'>
                    <img className='myAcount_data_image' src={`${billingData.profilePicture}`} alt={`${billingData.name}`} />
                    <h2 className='myAcount_data_hi'>Hola, {billingData.name} {billingData.lastname}</h2>
                </div>
                <h3 className='myAcount_data_titleData'>Datos de Facturación</h3>
                <h3 className='myAcount_data_personalData'>Nombre: {billingData.name}</h3>
                <h3 className='myAcount_data_personalData'>País: {billingData.country}</h3>
                <h3 className='myAcount_data_personalData'>Provincia: {billingData.state}</h3>
                <h3 className='myAcount_data_personalData'>Dirección: {billingData.address}</h3>
                <button className='myAcount_data_btn' onClick={() => setEditEnabled(!editEnabled)}>Editar Datos</button>
                <button className='myAcount_data_btn-logout' onClick={() => handleLogOut()}>Cerrar Sesión</button>
            </div>
            <div className='myAcount_orders'>
                <h3 className='myAcount_orders_title'>Mis Pedidos</h3>
                <div className='myAcount_orders_list'>

                    {billingData.orders.length === 0 ? (
                        <p className='myAcount_orders_noItem'>"Aun no has realizado ninguna compra"</p>
                    ) : (
                        <ul className='myAcount_orders_ul'>
                            {billingData.orders.map((order) => (
                                <li className='myAcount_orders_item' key={`order-${order.orderID}`}>
                                    <div className='myAcount_orders_orderData'>
                                        <p>Orden #{order.orderID}</p>
                                        <ul className='myAcount_orders_orderData_products'>
                                            {order.items.map((item) => (
                                                <li key={`item-${item.product}-${item.scent}`}>
                                                    <div>
                                                        <p> Producto: {item.product}</p>
                                                        <p> Aroma: {item.scent}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <p> Valor: ${order.totalPrice}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}

                </div>
            </div>


            {editEnabled &&
                <EditForm
                    setBillingData={setBillingData}
                    setEditEnabled={setEditEnabled} />
            }
        </div>
    )
}
