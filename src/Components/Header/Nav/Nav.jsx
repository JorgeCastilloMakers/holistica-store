import { NavIcons } from '../NavIcons/NavIcons'
import './nav.scss'
import { NavItem } from './NavItem/NavItem'

export const Nav = ({ homeLink, aboutLink, productsLink, contactLink, cartLink, authLink }) => {
    return (
        <>
            <nav className='navbar'>
                <NavItem link={homeLink}>Home</NavItem>
                <NavItem link={aboutLink} href={aboutLink}>Nosotros</NavItem>
                <NavItem link={productsLink}>Productos</NavItem>
                <NavItem link={contactLink}>Contacto</NavItem>
                <NavIcons cartLink={cartLink} authLink={authLink} />
            </nav>
        </>
    )
}
