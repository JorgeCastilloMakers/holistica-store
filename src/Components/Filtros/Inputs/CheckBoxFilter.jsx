import { useState } from 'react'
import './checkBox.scss'

export const CheckBoxFilter = ({ children, setCategoryFilter, categoryFilter }) => {

    const checkSelected = (e) => {
        if (e.target.checked) {
            setCategoryFilter(e.target.name)
        } else {
            setCategoryFilter("")
        }

    }

    return (
        <>
            <label htmlFor={children} className="checkbox_label">
                {children}
                <input
                    type="checkbox"
                    name={children}
                    id={children}
                    className="checkbox_input"
                    onChange={checkSelected}
                    checked={categoryFilter === children}

                />
            </label>
        </>
    )
}

export default CheckBoxFilter;