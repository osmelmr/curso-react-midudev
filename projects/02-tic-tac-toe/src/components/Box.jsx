import {useEffect, useRef} from 'react'

const Box = ({contenido, index, setTablero, turno, fin})=>{
    const check = useRef(false)
    useEffect(()=>{
        if(!fin){
            check.current = false
        }
    },[fin])
    const handleClick = ()=>{
        !fin && !check.current &&
            setTablero(prev=>{
                const tablero = [...prev]
                turno ?
                    tablero[index]='X'
                :
                    tablero[index]='O'
                check.current=true
                return tablero
            })
    }
    return (
    <div 
        onClick={handleClick}
        className='aspect-square min-w-5 bg-white/10 flex justify-center items-center'>
        <div className='text-4xl text-zinc-400 font-bold'>
            {contenido}
        </div>
    </div>
    )
}

export default Box