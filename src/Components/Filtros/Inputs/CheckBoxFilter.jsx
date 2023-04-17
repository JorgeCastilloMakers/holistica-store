import './checkBox.scss'

export const CheckBoxFilter = ({ children, setCategoryFilter, selected }) => {

    const checked = (e) => {
        if (e.target.checked) {
            console.log(e.target.name)
            setCategoryFilter(e.target.name)
        } else {
            return
        }

    }

    return (
        <>
            <label htmlFor={children} className="checkbox_label">
                {children}
                <input type="checkbox" name={children} id={children} className="checkbox_input" onChange={checked} checked={selected} />
            </label>
        </>
    )
}

export default CheckBoxFilter;