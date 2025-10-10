import Filters from './components/Filters'
import Products from './components/Products'
import { products } from './mocks/products'
import Car from './components/Car'
import { useFilters } from './hooks/useFilters'
import { carReducer } from './reducers/carReducer'
import { useReducer, useState } from 'react'

function App() {
  const { filteredProducts } = useFilters()
  const productos = filteredProducts(products)
  const [state, dispatch] = useReducer(carReducer, [])
  const carProducts = state
  const [carro, setCarro] = useState(false)

  const togleCar = () => {
    setCarro(prev => !prev)
  }

  return (
    <>
      <header className="h-20 bg-zinc-400">
        <Filters />
      </header>
      <main className="">
        <Products productos={productos} dispatch={dispatch} isCar={false} />
      </main>
      {
        carro ?
          <Car productos={carProducts} dispatch={dispatch} togleCar={togleCar} />
          :
          <div onClick={togleCar} className='aspect-square h-15 bg-orange-300 rounded-full absolute top-5 right-5'></div>
      }

    </>
  )
}

export default App
