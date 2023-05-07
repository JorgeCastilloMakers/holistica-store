import './loginForm.scss'
import logoBlack from '../../assets/Images/holistica-logo-black.png'
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const LoginForm = ({ setAlreadyRegistered }) => {

    const { login } = useAuth();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('')
            await login(user);
            navigate("/")
        } catch (error) {
            setError(error.message)
        }

    }

    return (
        <div className='login'>
            <img className='login_logo' src={logoBlack} alt="holistica-logo" />
            <h2 className='login_title'>INICIAR SESIÓN</h2>
            <form className='login_form' onSubmit={handleSubmit}>
                <label htmlFor="email" className='login_form_label'>
                    Email
                    <small className='login_form_error'>{error}</small>
                    <input type="email" name='email' className='login_form_input' onChange={handleChange} />
                </label>
                <label htmlFor="password" className='login_form_label'>
                    Contraseña
                    <small className='login_form_error'>{error}</small>
                    <input type="password" name='password' className='login_form_input' onChange={handleChange} />
                </label>

                <button className='login_form_btn' type='submit'>INGRESAR</button>

            </form>
            <h3 className='login_link_change'>¿No tienes cuenta?
                <span className='login_link_change_span' onClick={() => setAlreadyRegistered(false)}> Registrate aquí</span>
            </h3>
        </div>
    )
}
