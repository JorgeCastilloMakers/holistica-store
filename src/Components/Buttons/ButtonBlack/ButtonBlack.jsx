import './buttonBlack.scss';


export const ButtonBlack = ({ children, onClick, disabled, style }) => {




    return (
        <button onClick={onClick} style={style} className='btn-black' disabled={disabled}>{children}</button>
    )
}
