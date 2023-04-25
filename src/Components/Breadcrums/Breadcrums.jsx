import './breadcrums.scss'

export const Breadcrums = ({ categoryFilter, showDetails, setShowDetails, cardData }) => {

    return (
        <div className='breadcrums'>
            <h3 className='breadcrums_title'>Productos / </h3>
            <h3 className={showDetails ? 'breadcrums_category link color' : 'breadcrums_category color link'} onClick={() => setShowDetails(false)} >{showDetails ? ` ${cardData.category} ` : ` ${categoryFilter} `}</h3>
            <h3 className={!showDetails ? 'breadcrums_product' : 'breadcrums_product color'}>{!showDetails ? null : `/ ${cardData.name}`}</h3>
        </div>
    )
}
