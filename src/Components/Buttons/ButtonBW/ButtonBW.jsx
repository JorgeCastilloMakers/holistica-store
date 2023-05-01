import './buttonBW.scss'

export const ButtonBW = ({ children, onClick }) => {
    return (
        <>
            <button onClick={onClick} className="btn-bw">{children}</button>
        </>
    )
}
