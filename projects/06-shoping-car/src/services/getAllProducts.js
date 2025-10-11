BASE_URL = "https://fakestoreapi.com/products"

export const getAllProducts = async () => {

    const response = await fetch(BASE_URL)
    const data = await response.json()
    return data

}