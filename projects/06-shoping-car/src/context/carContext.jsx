import { createContext } from 'react'
import { useReducer } from 'react'
import carReducer from '../reducers/carReducer'

export const carContext = createContext()

export const CarContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(carReducer, [])
    return (
        < carContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </carContext.Provider >
    )
}


export default CarContextProvider
