import './navItem.scss'
import { useNavigate } from 'react-router-dom';


export const NavItem = ({ children, openMenu, link }) => {

    const navigate = useNavigate();

    const handleLinkClick = (e) => {
        console.log("hola nav")
        e.preventDefault();
        navigate(link)
        openMenu(false);
    }
    return (
        <>
            <li className='nav_list'><a onClick={handleLinkClick} className='nav_item' >{children}</a></li>
        </>
    )
}
