import './breadcrums.scss'
import { Link } from 'react-router-dom';

export const Breadcrums = ({ categoryFilter, category, name, style }) => {

    return (
        <div className='breadcrums' style={style ? style : {}}>
            <h3 className='breadcrums_title'>Productos / </h3>
            <h3 className={category ? 'breadcrums_category color' : 'breadcrums_category color'} >{category ? <Link className='link_category' to={'/products'}>{category}</Link> : ` ${categoryFilter} `}</h3>
            <h3 className={!category ? 'breadcrums_product' : 'breadcrums_product color'}>{!category ? null : `/ ${name}`}</h3>
        </div>
    )
}
