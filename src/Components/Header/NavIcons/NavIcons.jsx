import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import './navIcons.scss'
import { useState } from 'react';
import { NavItem } from '../Nav/NavItem/NavItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../../../Context/AuthContext'

export const NavIcons = ({ cartLink, authLink }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cart = useSelector(state => state.cart);
    const { user, loading } = useAuth();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    if (loading) return <h2>Loading...</h2>


    return (
        <>
            <div className="nav-icon">
                <Link to={authLink} className="login_link">
                    < AiOutlineUser className="icon" />
                    {user && <span className="login_link_name">Hola, {user.name}</span>}
                </Link>

                <Link to={cartLink}><span className="cartQuantity">{cart.length}</span><AiOutlineShoppingCart className="icon" /></Link>
                <div id="burger-menu" className={isMenuOpen ? 'close' : ''} onClick={toggleMenu}>
                    <span></span>
                </div>
                <div id="menu" className={isMenuOpen ? 'overlay' : ''}>
                    <ul>
                        <NavItem openMenu={setIsMenuOpen} link={"/"} >Home</NavItem>
                        <NavItem openMenu={setIsMenuOpen} link={"/#aboutUs"}>Nosotros</NavItem>
                        <NavItem openMenu={setIsMenuOpen} link={"/products"}>Productos</NavItem>
                        <NavItem openMenu={setIsMenuOpen} link={"/#contact"}>Contacto</NavItem>
                    </ul>
                </div>
            </div>
        </>
    )
}
