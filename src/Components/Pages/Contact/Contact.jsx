import './contact.scss'
import logoB from '../../../assets/Images/loto-logo-black.png'
import { ButtonBlack } from '../../Buttons/ButtonBlack/ButtonBlack.jsx'


export const Contact = () => {
    return (
        <section className="contact" id='contact' >

            <div className="contact_form_container" id='contact'>
                <div className="form_logo">
                    <h2 className='form_logo_title'>Holística</h2>
                    <img className='form_logo_image' src={logoB} alt="logo-black" />
                </div>
                <h2 className="contact_title">Contacto</h2>
                <p className='contact_text'>
                    Ponte en contacto con el siguiente formulario
                    o a través de nuestras redes sociales.
                </p>
                <form className='contact_form'>
                    <small className='contact_form_label_error'></small>
                    <label htmlFor="name" className='contact_form_label'>
                        Nombre
                        <input name='name' type="text" className='contact_form_input' />
                    </label>
                    <small className='contact_form_label_error'></small>
                    <label htmlFor="email" className='contact_form_label'>
                        Email
                        <input name='email' type="email" className='contact_form_input' />
                    </label>
                    <small className='contact_form_label_error'></small>
                    <label htmlFor="message" className='contact_form_label'>
                        Mensaje
                        <textarea name="message" id="message" cols="30" rows="10" className='contact_form_area'></textarea>
                    </label>
                    <ButtonBlack id="btn">Enviar</ButtonBlack>
                </form>
            </div>
        </section>
    )
}
