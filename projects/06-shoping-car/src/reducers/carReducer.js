const initialState = []

export const carReducer = (state, action) => {
    switch (action.type) {
        case "addToCar":
            if (state.some(product => product.id === action.payload.id)) {
                const newState = state.map(product => {
                    if (product.id === action.payload.id) {
                        const newQuantity = product.quantity + 1
                        return { ...product, quantity: newQuantity }
                    }
                    return product
                })
                return newState
            } else {
                return [...state, { ...action.payload, quantity: 1 }]
            }
        case "dropFromCar":
            if (state.some(product => product.id === action.payload.id)) {
                const newState = state.filter(product => (product.id !== action.payload.id))
                return newState
            }
            return state
        case "drop1FomCar":
            if (!state.some(product => product.id === action.payload.id)) return state
            const currentQuantity = state.find(produc => produc.id === action.payload.id).quantity
            if (currentQuantity <= 1) {
                const newState = state.filter(produ => (produ.id !== action.payload.id))
                return newState
            } else {
                const newState = state.map(product => {
                    if (product.id === action.payload.id) {
                        const newQuantity = product.quantity - 1
                        return { ...product, quantity: newQuantity }
                    }
                    return product
                })
                return newState
            }
    }

}