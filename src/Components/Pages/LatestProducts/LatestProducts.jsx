import { CardProduct } from '../../CardProduct/CardProduct'
import './latestProducts.scss'
import { useProductsList } from '../../../Hooks/useProductsList.js';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useEffect } from 'react'
import { Modalmessage } from '../../ModalMessage/Modalmessage';


export const LatestProducts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const products = useProductsList();
    const randomIndex = Math.floor(Math.random() * products.length);


    useEffect(() => {
        if (products.length > 0) {
            setIsLoading(false);
        }
    }, [products]);
    useEffect(() => {
        if (showModal) {
            setTimeout(() => {
                setShowModal(false);
                setModalMessage("");
            }, 2000);
        }
    }, [showModal]);
    return (
        <section className="latest_products">
            <h2 className='latest_products_title'>Últimos Productos</h2>
            {showModal && (
                <Modalmessage message={modalMessage} />

            )}
            <div className="latest_products_card_container">
                {isLoading ? (
                    <div className='skeleton_container'>
                        <Skeleton height={470} width={240} count={1} duration={1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: "5px" }} />
                        <Skeleton height={470} width={240} count={1} duration={1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: "5px" }} />
                        <Skeleton height={470} width={240} count={1} duration={1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: "5px" }} />
                        <Skeleton height={470} width={240} count={1} duration={1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: "5px" }} />
                    </div>

                ) : (
                    <>
                        {products.length > 0 && (
                            <>
                                <CardProduct setModalMessage={setModalMessage} setShowModal={setShowModal} key={products[randomIndex].id} {...products[randomIndex]} />
                                <CardProduct setModalMessage={setModalMessage} setShowModal={setShowModal} key={products[(randomIndex + 1) % products.length].id} {...products[(randomIndex + 1) % products.length]} />
                                <CardProduct setModalMessage={setModalMessage} setShowModal={setShowModal} key={products[(randomIndex + 2) % products.length].id} {...products[(randomIndex + 2) % products.length]} />
                                <CardProduct setModalMessage={setModalMessage} setShowModal={setShowModal} key={products[(randomIndex + 3) % products.length].id} {...products[(randomIndex + 3) % products.length]} />
                            </>
                        )}
                    </>
                )}
            </div>
        </section>
    )
}
