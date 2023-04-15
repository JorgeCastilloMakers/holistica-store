import './logo.scss'
import logoW from '../../../assets/Images/holistica-logo.png'

export const Logo = () => {
    return (
        <>
            <div className='logo'>
                <h2 className='logo_title'>Holística</h2>
                <img className='logo_image' src={logoW} alt="holistica-logo-white" />
            </div>
        </>
    )
}
