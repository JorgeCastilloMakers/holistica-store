import './nav.scss'

export const Nav = ({ children }) => {
    return (
        <>
            <nav className='navbar'>
                {children}
            </nav>
        </>
    )
}
