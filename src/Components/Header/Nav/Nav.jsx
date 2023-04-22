import { NavIcons } from '../NavIcons/NavIcons'
import './nav.scss'
import { NavItem } from './NavItem/NavItem'

export const Nav = ({ homeLink, aboutLink, productsLink, contactLink, cartLink }) => {
    return (
        <>
            <nav className='navbar'>
                <NavItem to={homeLink}>Home</NavItem>
                <NavItem to={aboutLink} href={aboutLink}>Nosotros</NavItem>
                <NavItem to={productsLink}>Productos</NavItem>
                <NavItem to={contactLink}>Contacto</NavItem>
                <NavIcons to={cartLink} />
            </nav>
        </>
    )
}
