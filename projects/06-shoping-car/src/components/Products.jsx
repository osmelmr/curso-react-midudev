import { BiCartAdd } from 'react-icons/bi';
import { BsCartX } from 'react-icons/bs';
import { useState } from 'react'

const Producto = ({ id, title, price, tumbnail, category, isCar, dispatch, quantity }) => {
    const [agregado, setAgregado] = useState(false)
    const producto = {
        id: id,
        title: title,
        price: price,
        tumbnail: tumbnail,
        category: category,
    }
    const handleLess = () => dispatch({ type: "drop1FomCar", payload: producto })
    const handlePlus = () => dispatch({ type: "addToCar", payload: producto })
    const handleAdd = () => {
        dispatch({ type: "addToCar", payload: producto })
        setAgregado(prev => !prev)
    }
    const handleRemove = () => {
        dispatch({ type: "dropFromCar", payload: producto })
        setAgregado(prev => !prev)
    }
    return (
        <div className="flex flex-col bg-red aspect-[3/4]">
            <div className="aspect-square overflow-hidden">
                <img
                    className='h-full w-full object-cover'
                    src="https://m.media-amazon.com/images/I/716CKwRaceL._AC_SX425_.jpg"
                    alt={`${title}, ${category}, ${price}`}
                />``
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <div>
                        <h3>{title}</h3>
                        <span>{price}</span>
                    </div>

                    {isCar && <div className="aspect-square h-full bg-red flex justify-center items-center"><p>{quantity}</p></div>}
                </div>

                {isCar ?
                    <div className='self-center flex gap-3'>
                        <div className=' aspect-square w-fit'
                            onClick={handleLess}
                        >
                            <BsCartX className='bg-zinc-300 rounded-sm text-5xl' />
                        </div>
                        <div className='aspect-square w-fit'
                            onClick={handlePlus}
                        >
                            <BiCartAdd className='bg-zinc-300 rounded-sm text-5xl' />
                        </div>
                    </div>
                    :
                    (
                        agregado ?
                            <div className='self-center aspect-square w-fit'
                                onClick={handleRemove}
                            >
                                <BsCartX className='bg-zinc-300 rounded-sm text-5xl' />
                            </div>
                            :
                            <div className='self-center aspect-square w-fit'
                                onClick={handleAdd}
                            >
                                <BiCartAdd className='bg-zinc-300 rounded-sm text-5xl' />
                            </div>
                    )
                }
            </div>
        </div>
    )
}

const Products = ({ productos, isCar, dispatch }) => {

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {productos ?
                productos.map(product => (
                    <Producto key={product.id} {...product} isCar={isCar} dispatch={dispatch} />
                ))
                :
                <p>no products</p>
            }
        </section>
    )
}

export default Products