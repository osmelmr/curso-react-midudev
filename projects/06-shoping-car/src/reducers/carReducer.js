const addToCar = ({ state, product, action }) => {
    if (!product) return [...state, { ...action.payload, quantity: 1 }]
    const newState = state.map(item => {
        if (item.id === action.payload.id) {
            const newQuantity = product.quantity + 1
            return { ...item, quantity: newQuantity }
        }
        return item
    })
    return newState

}

const removeFromCar = ({ state, product, action }) => {
    if (!product) return state
    return state.filter(item => item.id !== action.payload.id)

}

const decreaseFromCar = ({ state, product, action }) => {
    if (!product) return state
    if (product.quantity > 1) {
        const newState = state.map(item => {
            if (item.id === action.payload.id) {
                const newQuantity = product.quantity - 1
                return { ...item, quantity: newQuantity }
            }
            return item
        })
        return newState
    } else {
        return removeFromCar({ state, product, action })
    }
}

const carReducer = (state, action) => {
    const product = state.find(item => item.id === action.payload.id)

    switch (action.type) {
        case "addToCar":
            return addToCar({ state, product, action })
        case "removeFromCar":
            return removeFromCar({ state, product, action })
        case "increaseFromCar":
            return addToCar({ state, product, action })
        case "decreaseFromCar":
            return decreaseFromCar({ state, product, action })
        default:
            return state
    }
}

export default carReducer