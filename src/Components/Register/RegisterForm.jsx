import './registerForm.scss'
import logoBlack from '../../assets/Images/holistica-logo-black.png'
import { useState } from 'react'
import { useAuth } from '../../Context/AuthContext'
import { useFormik } from 'formik';

export const RegisterForm = ({ setAlreadyRegistered }) => {
    const provinciasArgentina = [
        "Buenos Aires",
        "Buenos Aires - CABA",
        "Catamarca",
        "Chaco",
        "Chubut",
        "Córdoba",
        "Corrientes",
        "Entre Ríos",
        "Formosa",
        "Jujuy",
        "La Pampa",
        "La Rioja",
        "Mendoza",
        "Misiones",
        "Neuquén",
        "Río Negro",
        "Salta",
        "San Juan",
        "San Luis",
        "Santa Cruz",
        "Santa Fe",
        "Santiago del Estero",
        "Tierra del Fuego",
        "Tucumán"
    ];
    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        lastname: '',
        country: '',
        state: '',
        address: ''
    });

    const [error, setError] = useState();

    const { signUp } = useAuth()


    const regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    const { values, errors, touched, handleBlur, resetForm, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
            lastname: '',
            country: "Argentina",
            state: '',
            address: ''
        },
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Es un campo requerido';
            }
            if (!regExPassword.test(values.password)) {
                errors.password = 'Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula y un número'
            }
            if (values.password !== values.repeatPassword) {
                errors.repeatPassword = 'Las contraseñas no coinciden'
            }
            if (!values.name) {
                errors.name = 'Es un campo requerido';
            }
            if (!values.lastname) {
                errors.lastname = 'Es un campo requerido';
            }
            if (!values.state) {
                errors.state = 'Es un campo requerido';
            }
            if (!values.address) {
                errors.address = 'Es un campo requerido';
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                setError('')
                const { email, password, name, lastname, country, state, address } = values;
                await signUp(email, password, name, lastname, country, state, address);
            } catch (error) {
                setError(error.message)
            }
            alert("se ha creado un usuario");
            resetForm();
            setAlreadyRegistered(true)
            // handleReset();
        }, onChange: async (e) => {
            const { name, value } = e.target;
            setUser({ ...user, [name]: value })
        },
        onBlur: () => {
            validateOnBlur
        }


    })

    return (
        <div className='register' >
            <form className='register_form' onSubmit={handleSubmit}>
                <h2 className='register_form_title'>REGISTRARSE</h2>
                <div className='register_form_container'>
                    {error && <span className='register_server_error'>{error}</span>}
                    <label htmlFor="name" className='register_form_label'>
                        Nombre
                        <small className='register_form_error'>{errors.name}</small>
                        <input type="text" name='name' className='register_form_input' onBlur={handleBlur} onChange={handleChange} />
                    </label>
                    <label htmlFor="lastname" className='register_form_label'>
                        Apellido
                        {touched.password && <small className='register_form_error'>{errors.lastname}</small>}
                        <input type="text" name='lastname' className='register_form_input' onBlur={handleBlur} onChange={handleChange} />
                    </label>
                </div>
                <label htmlFor="email" className='register_form_label'>
                    Email
                    {touched.password && <small className='register_form_error'>{errors.email}</small>}
                    <input type="email" name='email' className='register_form_input' onBlur={handleBlur} onChange={handleChange} />
                </label>
                <div className='register_form_container'>
                    <label htmlFor="password" className='register_form_label'>
                        Contraseña
                        {touched.password && <small className='register_form_error'>{errors.password}</small>}
                        <input type="password" name='password' className='register_form_input' onBlur={handleBlur} onChange={handleChange} />
                    </label>
                    <label htmlFor="repeatPassword" className='register_form_label'>
                        Repetir Contraseña
                        {touched.password && <small className='register_form_error'>{errors.repeatPassword}</small>}
                        <input type="password" name='repeatPassword' className='register_form_input' onBlur={handleBlur} onChange={handleChange} />
                    </label>
                </div>
                <div className='register_form_container'>
                    <label htmlFor="country" className='register_form_label'>
                        País
                        <input type="text" name='country' className='register_form_input' defaultValue={"Argentina"} readOnly onBlur={handleBlur} onChange={handleChange} />
                    </label>
                    <label htmlFor="lastname" className='register_form_label'>
                        Provincia
                        {touched.password && <small className='register_form_error'>{errors.state}</small>}
                        <select className='register_form_select' name="state" id="state" onBlur={handleBlur} onChange={handleChange}>
                            {provinciasArgentina.map(provincia => {
                                return <option className='register_form_select_option' value={provincia}>{provincia}</option>
                            })}
                        </select>
                    </label>
                </div>
                <label htmlFor="address" className='register_form_label'>
                    Dirección
                    {touched.password && <small className='register_form_error'>{errors.address}</small>}
                    <input type="text" name='address' className='register_form_input' onBlur={handleBlur} onChange={handleChange} />
                </label>
                <button className='register_form_btn'>REGISTRARSE</button>
            </form>
            <img className='register_logo' src={logoBlack} alt="holistica-logo" />
        </div>
    )
}
