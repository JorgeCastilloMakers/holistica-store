import './buttonBlack.scss';


export const ButtonBlack = ({ children, onClick }) => {




    return (
        <button onClick={onClick} className='btn-black'>{children}</button>
    )
}
