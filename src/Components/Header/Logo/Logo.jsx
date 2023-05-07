import './logo.scss'
import logoW from '../../../assets/Images/holistica-logo.png'
import { useNavigate } from 'react-router-dom';

export const Logo = () => {

    const navigate = useNavigate();

    const handleLinkClick = (e) => {
        navigate("/")
    }

    return (
        <>
            <div className='logo'>
                <h2 onClick={() => handleLinkClick()} className='logo_title'>Holística</h2>
                <img className='logo_image' src={logoW} alt="holistica-logo-white" />
            </div>
        </>
    )
}
