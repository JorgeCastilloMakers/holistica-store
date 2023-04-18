import './filtros.scss'
import { CheckBoxFilter } from './Inputs/CheckBoxFilter'

export const Filtros = ({ setCategoryFilter, categoryFilter }) => {

    return (
        <div className='filters'>
            <h3 className='filters_title'>Categorías</h3>
            <div className='filters_inputs'>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter}>Todos</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter}>Sahumerios</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter}>Sahumos</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter}>Velas</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter}>Cosmética Natural</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter}>Defumación</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter}>Kits</CheckBoxFilter>
            </div>

        </div>
    )
}
