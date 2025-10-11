import { useContext } from 'react'
import { filtersContext } from "../context/filtersContext"
import products from '../mocks/products'

export const useFilteredProducts = () => {
    const { filters } = useContext(filtersContext)
    const filterProducts = (products) => {
        const filteredProducts = products.map(
            item => {
                if (item.price >= filters.minPrice && (filters.category === "all" || item.category.include(filters.category))) {
                    return true
                }
                return false
            }
        )
        return filteredProducts
    }
    return filterProducts(products)
}