import './filtros.scss'
import { CheckBoxFilter } from './Inputs/CheckBoxFilter'

export const Filtros = ({ setCategoryFilter, categoryFilter, setCurrentPage }) => {

    return (
        <div className='filters'>
            <h3 className='filters_title'>Categorías</h3>
            <div className='filters_inputs'>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} setCurrentPage={setCurrentPage}>Todos</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} setCurrentPage={setCurrentPage}>Sahumerios</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} setCurrentPage={setCurrentPage}>Sahumos</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} setCurrentPage={setCurrentPage}>Velas</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} setCurrentPage={setCurrentPage}>Cosmética Natural</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} setCurrentPage={setCurrentPage}>Defumación</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} setCurrentPage={setCurrentPage}>Kits</CheckBoxFilter>
            </div>

        </div>
    )
}
