import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import './navIcons.scss'
import { useState } from 'react';
import { NavItem } from '../Nav/NavItem/NavItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const NavIcons = ({ to }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cart = useSelector(state => state.cart);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="nav-icon">
                <AiOutlineUser className="icon" />
                <Link to={to}><span className="cartQuantity">{cart.length}</span><AiOutlineShoppingCart className="icon" /></Link>
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
