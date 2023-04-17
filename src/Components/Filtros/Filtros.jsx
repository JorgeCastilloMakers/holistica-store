import './filtros.scss'
import { CheckBoxFilter } from './Inputs/CheckBoxFilter'

export const Filtros = ({ setCategoryFilter, handleFilterSelect }) => {

    return (
        <div className='filters'>
            <h3 className='filters_title'>Categorías</h3>
            <div className='filters_inputs'>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} selected={handleFilterSelect}>Todos</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} selected={handleFilterSelect}>Sahumerios</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} selected={handleFilterSelect}>Sahumos</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} selected={handleFilterSelect}>Velas</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} selected={handleFilterSelect}>Cosmética Natural</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} selected={handleFilterSelect}>Defumación</CheckBoxFilter>
                <CheckBoxFilter setCategoryFilter={setCategoryFilter} selected={handleFilterSelect}>Kits</CheckBoxFilter>
            </div>

        </div>
    )
}
