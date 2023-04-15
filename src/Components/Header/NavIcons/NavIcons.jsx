import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import './navIcons.scss'
import { useState } from 'react';
import { NavItem } from '../Nav/NavItem/NavItem';


export const NavIcons = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    }

    return (
        <>
            <div className="nav-icon">
                <AiOutlineUser className="icon" />
                <AiOutlineShoppingCart className="icon" />
                <div id="burger-menu" className={isMenuOpen ? 'close' : ''} onClick={toggleMenu}>
                    <span></span>
                </div>
                <div id="menu" className={isMenuOpen ? 'overlay' : ''}>
                    <ul>
                        <NavItem href={"/"}>Home</NavItem>
                        <NavItem href={"#aboutUs"} onClick={handleLinkClick}>Nosotros</NavItem>
                        <NavItem onClick={handleLinkClick}>Productos</NavItem>
                        <NavItem href={"#contact"} onClick={handleLinkClick}>Contacto</NavItem>
                    </ul>
                </div>
            </div>
        </>
    )
}
