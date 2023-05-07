import './buttonWhite.scss';
import { useNavigate } from 'react-router-dom';

export const ButtonWhite = ({ children, link }) => {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate(link)} className='btn-white'>{children}</button>
        </>
    )
};
