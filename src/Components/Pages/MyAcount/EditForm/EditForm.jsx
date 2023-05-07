import { useState } from 'react'
import { useAuth } from '../../../../Context/AuthContext'
import { useFormik } from 'formik';
import { provincias } from '../../../../Utils/states.js'
import './editForm.scss'

export const EditForm = ({ setBillingData, setEditEnabled }) => {
    const { updateProfile } = useAuth();
    const [error, setError] = useState('');

    const { values, errors, touched, handleBlur, resetForm, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            country: "Argentina",
            state: '',
            address: '',
            picture: ''
        },
        validate: (values) => {
            const errors = {};
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
            if (!values.picture) {
                errors.picture = 'Es un campo requerido';
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                setError('')
                const { name, lastname, country, state, address, picture } = values;
                await updateProfile(name, lastname, country, state, address, picture);
                setBillingData(prevState => ({
                    ...prevState,
                    name: name,
                    lastname: lastname,
                    country: country,
                    state: state,
                    address: address,
                    profilePicture: picture
                }));
            } catch (error) {
                setError(error.message)
            }
            alert("se actualizaron los datos");
            resetForm();
        },
        onBlur: () => {
            validateOnBlur
        }


    })

    return (
        <form onSubmit={handleSubmit} className="editForm">
            <h3 onClick={() => setEditEnabled(false)} className='editForm_close'>X</h3>
            <h3 className='editForm_title'>Actualiza tus datos</h3>
            <label htmlFor="name" className='editForm_label'>
                Nombre
                {touched.name && <small className='editForm_error'>{errors.name}</small>}
                <input type="text" name='name' onBlur={handleBlur} onChange={handleChange} className='editForm_input' />
            </label>
            <label htmlFor="lastname" className='editForm_label'>
                Apellido
                {touched.lastname && <small className='editForm_error'>{errors.lastname}</small>}
                <input type="text" name='lastname' onBlur={handleBlur} onChange={handleChange} className='editForm_input' />
            </label>
            <label htmlFor="country" className='editForm_label'>
                País
                <input type="text" name='country' defaultValue={"Argentina"} readOnly onBlur={handleBlur} onChange={handleChange} className='editForm_input' />
            </label>
            <label htmlFor="lastname" className='editForm_label'>
                Provincia
                {touched.password && <small className='editForm_error'>{errors.state}</small>}
                <select name="state" id="state" onBlur={handleBlur} onChange={handleChange} className='editForm_select'>
                    {provincias.map(provincia => {
                        return <option key={provincia} value={provincia}>{provincia}</option>
                    })}
                </select>
            </label>
            <label htmlFor="address" className='editForm_label'>
                Dirección
                {touched.address && <small className='editForm_error'>{errors.address}</small>}
                <input type="text" name='address' onBlur={handleBlur} onChange={handleChange} className='editForm_input' />
            </label>
            <label htmlFor="picture" className='editForm_label'>
                Foto de Perfil *coloca un link a tu imagen
                {touched.picture && <small className='editForm_error'>{errors.picture}</small>}
                <input type="text" name='picture' onBlur={handleBlur} onChange={handleChange} className='editForm_input' />
            </label>
            <button type='submit' className='editForm_btn'>Actualizar</button>
        </form>
    )
}
