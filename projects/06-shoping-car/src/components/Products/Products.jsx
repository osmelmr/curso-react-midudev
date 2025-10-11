import Product from './Product'
import products from '../../mocks/products'
import { carContext } from '../../context/carContext'
import { useContext } from 'react'

const Products = () => {
    const { dispatch } = useContext(carContext)
    const handleClick = (item) => {
        dispatch({ type: "addToCar", payload: item })
    }
    return (
        <section
            className="grid grid-cols-1 gap-4 px-10 justify-items-center
                    sm:grid-cols-2 sm:gap-6 sm:px-15
                    md:grid-cols-3 md:gap-8 md:px-20
                    "
        >
            {products.map(
                item => (
                    <Product key={item.id} {...item}>
                        <button className="bg-zinc-300 rounded-sm"
                            type="button"
                            onClick={() => handleClick(item)}
                        >
                            add
                        </button>
                    </Product>
                )
            )

            }
        </section>
    )
}

export default Products