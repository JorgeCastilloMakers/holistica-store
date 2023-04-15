import './footer.scss'
import { AiFillGithub } from "react-icons/ai";


export const Footer = () => {
    return (
        <div className='footer'>
            <p className='footer_text'>Holística Tienda Online - Desarrollada por Jorge Castillo</p>
            <a href="#" className='footer_icon'><AiFillGithub /></a>
        </div>
    )
}
