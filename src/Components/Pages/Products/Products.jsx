import './products.scss';
import { useProductsList } from '../../../Hooks/useProductsList.js';
import { CardProduct } from '../../CardProduct/CardProduct.jsx'
import { useState, useEffect } from 'react'
import loaderGif from '../../../assets/Images/loader.gif'
import { Filtros } from '../../Filtros/Filtros';
import { PaginationProducts } from '../../Pagination/PaginationProducts';

export const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const products = useProductsList();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const [categoryFilter, setCategoryFilter] = useState("Todos");
    useEffect(() => {

        if (products.length > 0) {
            setIsLoading(false);
        }
    }, [products]);

    //manejo de filtros segun checkbox
    const filteredProducts = categoryFilter === "Todos"
        ? products
        : products.filter(product => (product.category).toUpperCase() === (categoryFilter).toUpperCase());

    //manejo de checkboxs seleccionados
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterSelect = (filter) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter((f) => f !== filter));
        } else {
            setSelectedFilters([...selectedFilters, filter]);
        }
    };


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

    return (
        <section className="products">
            <h2 className='products_title'>Productos</h2>
            <div className='container'>
                <Filtros setCategoryFilter={setCategoryFilter} handleFilterSelect={handleFilterSelect}></Filtros>
                <div className="products_card_container">
                    {isLoading ? (
                        <div className='products_card_loader'>
                            <img className='products_card_loader_img' src={loaderGif} alt="" />
                            <h3 className='product_card_loader_text'>Cargando Productos</h3>
                        </div>
                    ) :
                        (
                            <div className='card_container'>
                                {currentProducts.map(product => (
                                    <CardProduct key={product.id} {...product}></CardProduct>
                                ))}
                            </div>
                        )

                    }
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
