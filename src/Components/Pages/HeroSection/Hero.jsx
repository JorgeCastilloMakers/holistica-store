import './hero.scss'
import logoW from '../../../assets/Images/holistica-logo.png'
import { ButtonWhite } from '../../Buttons/ButtonWhite/ButtonWhite'

export const Hero = () => {
    return (
        <section className='hero' id='hero'>
            <div className='hero_overlay'>
                <img className='hero_image' src={logoW} alt="" />
                <h2 className='hero_title'>Holística</h2>
                <h3 className='hero_subtitle'>Tienda Online</h3>
                <div className="hero_btn_container">
                    <ButtonWhite>Ver Productos</ButtonWhite>
                </div>


            </div>
        </section>
    )
}
