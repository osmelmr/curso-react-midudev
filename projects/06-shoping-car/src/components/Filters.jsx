import { useContext } from 'react'
import { filtersContext } from '../context/filtersContext'

const Filters = () => {
    const { filters, setFilters } = useContext(filtersContext)

    const handleChange = (e) => {
        setFilters(prev => ({ ...filters, [e.target.name]: e.target.value }))
    }

    return (
        <>
            <form>
                <label htmlFor='rango-de-precio'>Price</label>
                <input
                    type='range'
                    min='0'
                    max='1000'
                    id='rango-de-precio'
                    value={filters.minPrice}
                    name='minPrice'
                    onChange={handleChange}
                />
                <label htmlFor="categorias" >Category</label>
                <select id='categorias' value={filters.category} name='category' onChange={handleChange}>
                    <option value='all'>todos</option>
                    <option value='laptops'>laptops</option>
                    <option value='smartphones'>celulares</option>
                </select>
            </form>
        </>
    )
}

export default Filters