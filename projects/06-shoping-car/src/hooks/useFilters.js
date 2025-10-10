import { useContext } from 'react'
import { filtersContext } from '../context/filtersContext'

export const useFilters = () => {
    const { filters, setFilters } = useContext(filtersContext)

    const filteredProducts = (products) => {

        return products.filter(product =>
            product.price >= filters.minPrice
            &&
            (
                product.category === filters.category ||
                filters.category === 'all'
            )
        )
    }

    return { filters, setFilters, filteredProducts }
}