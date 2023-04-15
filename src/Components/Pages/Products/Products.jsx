import './products.scss';
import { useProductsList } from '../../../Hooks/useProductsList.js';
import { CardProduct } from '../../CardProduct/CardProduct.jsx'
import { useState, useEffect } from 'react'
import loaderGif from '../../../assets/Images/loader.gif'

export const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const products = useProductsList();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {

        if (products.length > 0) {
            setIsLoading(false);
        }
    }, [products]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(products.length / productsPerPage);

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

    return (
        <section className="products">
            <h2 className='products_title'>Productos</h2>
            <div className="products_card_container">
                {isLoading ? (
                    <div className='products_card_loader'>
                        <img className='products_card_loader_img' src={loaderGif} alt="" />
                        <h3 className='product_card_loader_text'>Cargando Productos</h3>
                    </div>
                ) :
                    (
                        <>
                            {currentProducts.map(product => (
                                <CardProduct key={product.id} {...product}></CardProduct>
                            ))}
                        </>
                    )

                }
            </div>
            <div className="pagination">
                <button className='pagination_btn' onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
                <span className='pagination_page'>{`${currentPage}`}</span>
                <button className='pagination_btn' onClick={nextPage} disabled={currentPage === totalPages}>Siguiente</button>
            </div>
        </section>
    )
}
