import './paginationProducts.scss'

export const PaginationProducts = ({ currentPage, prevPage, nextPage, totalPages }) => {
    return (
        <div className="pagination">
            <button className='pagination_btn' onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
            <span className='pagination_page'>{`${currentPage}`}</span>
            <button className='pagination_btn' onClick={nextPage} disabled={currentPage === totalPages}>Siguiente</button>
        </div>
    )
}
