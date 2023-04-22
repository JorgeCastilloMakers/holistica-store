import './navItem.scss'
import { Link } from 'react-router-dom';

export const NavItem = ({ children, to, href }) => {

    return (
        <>
            <li className='nav_list'><Link className='nav_item' href={href} to={to}>{children}</Link></li>
        </>
    )
}
