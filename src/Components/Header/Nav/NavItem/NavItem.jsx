import './navItem.scss'
import { useNavigate, Link } from 'react-router-dom';



export const NavItem = ({ children, openMenu, link }) => {

    const navigate = useNavigate();

    const handleLinkClick = (e) => {
        e.preventDefault();
        navigate(link)
        if (typeof openMenu === 'function') {
            openMenu(false);
        }
    }
    return (
        <>
            <li className='nav_list'> <Link to={link} className='nav_item'>{children}</Link></li>
            {/* <li className='nav_list'><a onClick={handleLinkClick} className='nav_item'>{children}</a></li> */}
        </>
    )
}
