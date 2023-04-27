import './products.scss';
import { useProductsList } from '../../../Hooks/useProductsList.js';
import { CardProduct } from '../../CardProduct/CardProduct.jsx'
import { useState, useEffect } from 'react'
import loaderGif from '../../../assets/Images/loader.gif'
import { Filtros } from '../../Filtros/Filtros';
import { PaginationProducts } from '../../Pagination/PaginationProducts';
import { ProductDetails } from '../../ProductDetails/ProductDetails.jsx'
import { Breadcrums } from '../../BreadCrums/BreadCrums';
import { Modalmessage } from '../../ModalMessage/Modalmessage.jsx';

export const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const products = useProductsList();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const [categoryFilter, setCategoryFilter] = useState("Todos");
    const [showDetails, setShowDetails] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({})
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

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
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
                {!showDetails &&
                    <Filtros
                        setCategoryFilter={setCategoryFilter}
                        categoryFilter={categoryFilter}
                        setShowDetails={setShowDetails} />
                }

                <div className="products_card_container">
                    <Breadcrums
                        categoryFilter={categoryFilter}
                        showDetails={showDetails}
                        setShowDetails={setShowDetails}
                        cardData={selectedProduct}
                        setSelectedProduct={setSelectedProduct} >

                    </Breadcrums>
                    {showDetails ? (
                        <div>
                            <ProductDetails cardData={selectedProduct} />
                        </div>
                    ) : (
                        <div className='card_container' >
                            {isLoading ? (
                                <div className='products_card_loader'>
                                    <img className='products_card_loader_img' src={loaderGif} alt="" />
                                    <h3 className='product_card_loader_text'>Cargando Productos</h3>
                                </div>
                            ) : (
                                <div className='card_container'>
                                    {currentProducts.map(product => (
                                        <CardProduct
                                            showDetails={showDetails}
                                            setShowDetails={setShowDetails}
                                            setSelectedProduct={setSelectedProduct}
                                            selectedProduct={selectedProduct}
                                            setModalMessage={setModalMessage}
                                            setShowModal={setShowModal}
                                            key={product.id} {...product}>
                                        </CardProduct>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                    {!showDetails &&
                        <PaginationProducts
                            prevPage={prevPage}
                            nextPage={nextPage}
                            totalPages={totalPages}
                            currentPage={currentPage}>
                        </PaginationProducts>
                    }
                </div>
            </div>
        </section>
    )
}
