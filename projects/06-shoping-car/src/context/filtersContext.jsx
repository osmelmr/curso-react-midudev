import { createContext, useState } from 'react'

export const filtersContext = createContext({})


export const FiltersProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        minPrice: 0,
        category: 'all'
    })

    return (
        <filtersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </filtersContext.Provider>
    )
}