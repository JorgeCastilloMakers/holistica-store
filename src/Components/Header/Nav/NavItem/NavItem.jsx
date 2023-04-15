import './navItem.scss'

export const NavItem = ({ children, href, onClick }) => {
    return (
        <>
            <li className='nav_list'><a className='nav_item' href={href} onClick={onClick}>{children}</a></li>
        </>
    )
}
