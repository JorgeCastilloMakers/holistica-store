import './footer.scss'
import { AiFillGithub } from "react-icons/ai";


export const Footer = () => {
    return (
        <div className='footer'>
            <p className='footer_text'>Holística Tienda Online - Desarrollada por Jorge Castillo</p>
            <a href="https://github.com/JorgeCastilloMakers" target="_blank" className='footer_icon'><AiFillGithub /></a>
        </div>
    )
}
