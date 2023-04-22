import './filtros.scss'
import { CheckBoxFilter } from './Inputs/CheckBoxFilter'

export const Filtros = ({ setCategoryFilter, categoryFilter, setShowDetails }) => {

    return (
        <div className='filters'>
            <h3 className='filters_title'>Categorías</h3>
            <div className='filters_inputs'>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} setShowDetails={setShowDetails}>Todos</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} setShowDetails={setShowDetails}>Sahumerios</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} setShowDetails={setShowDetails}>Sahumos</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} setShowDetails={setShowDetails}>Velas</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} setShowDetails={setShowDetails}>Cosmética Natural</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} setShowDetails={setShowDetails}>Defumación</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} setShowDetails={setShowDetails}>Kits</CheckBoxFilter>
            </div>

        </div>
    )
}
