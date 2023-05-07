import './products.scss';
import { useProductsList } from '../../../Hooks/useProductsList.js';
import { CardProduct } from '../../CardProduct/CardProduct.jsx'
import { useState, useEffect } from 'react'
import { Filtros } from '../../Filtros/Filtros';
import { PaginationProducts } from '../../Pagination/PaginationProducts';
import { Breadcrums } from '../../Breadcrums/Breadcrums.jsx';
import { Modalmessage } from '../../ModalMessage/Modalmessage.jsx';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const products = useProductsList();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const [categoryFilter, setCategoryFilter] = useState("Todos");
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    useEffect(() => {

        if (products.length > 0) {
            setIsLoading(false);
        }
    }, [products]);

    //manejo de filtros segun checkbox
    const filteredProducts = categoryFilter === "Todos"
        ? products
        : products.filter(product => (product.category).toUpperCase() === (categoryFilter).toUpperCase());


    //paginacion
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const goToTop = () => {
        window.scrollTo(0, 0);
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            goToTop()
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            goToTop()
        }
    };
    useEffect(() => {
        if (showModal) {
            setTimeout(() => {
                setShowModal(false);
                setModalMessage("");
            }, 2000);
        }
    }, [showModal]);


    return (
        <section className="products">
            <h2 className='products_title'>Productos</h2>
            {showModal && (
                <Modalmessage message={modalMessage} />
            )}
            <div className='container'>
                <Filtros
                    setCategoryFilter={setCategoryFilter}
                    categoryFilter={categoryFilter}
                    setCurrentPage={setCurrentPage}
                />
                <div className="products_card_container">
                    <Breadcrums
                        categoryFilter={categoryFilter}>
                    </Breadcrums>
                    <div className='card_container' >
                        {isLoading ? (
                            <div className='skeleton_container'>
                                <Skeleton height={470} width={240} count={1} duration={1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: "5px" }} />
                                <Skeleton height={470} width={240} count={1} duration={1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: "5px" }} />
                                <Skeleton height={470} width={240} count={1} duration={1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: "5px" }} />
                                <Skeleton height={470} width={240} count={1} duration={1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: "5px" }} />
                            </div>
                        ) : (
                            <div className='card_container'>
                                {currentProducts.map(product => (
                                    <CardProduct
                                        setModalMessage={setModalMessage}
                                        setShowModal={setShowModal}
                                        key={product.id} {...product}>
                                    </CardProduct>
                                ))}
                            </div>
                        )}
                    </div>
                    <PaginationProducts
                        prevPage={prevPage}
                        nextPage={nextPage}
                        totalPages={totalPages}
                        currentPage={currentPage}>
                    </PaginationProducts>
                </div>
            </div>
        </section>
    )
}
