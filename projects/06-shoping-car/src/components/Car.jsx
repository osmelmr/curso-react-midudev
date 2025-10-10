import Products from './Products';
import { CgCloseO } from 'react-icons/cg';


const Car = ({ productos, dispatch, togleCar }) => {

    return (
        <>
            <aside className='fixed right-0 top-0 h-full w-96 bg-zinc-200'>
                <CgCloseO onClick={togleCar} className='text-5xl' />
                <Products productos={productos} isCar={true} dispatch={dispatch} />
            </aside>
        </>
    )
}

export default Car