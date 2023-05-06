import './loginRegister.scss'
import { useState } from 'react'
import { LoginForm } from '../../Login/LoginForm'
import { RegisterForm } from '../../Register/RegisterForm'

export const LoginRegister = () => {
    const [alreadyRegistered, setAlreadyRegistered] = useState(true)


    return (
        <section className='auth'>
            {alreadyRegistered ?
                <LoginForm setAlreadyRegistered={setAlreadyRegistered} />
                :
                <RegisterForm setAlreadyRegistered={setAlreadyRegistered} />
            }


        </section>
    )
}
