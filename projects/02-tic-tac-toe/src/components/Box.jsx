const Box = ({children, index, setTablero, turno, fin})=>{
    const handleClick = ()=>{

        !fin && !children &&
            setTablero(prev=>{
                const tablero = [...prev]
                turno ?
                    tablero[index]='X'
                :
                    tablero[index]='O'
                localStorage.setItem('tablero', JSON.stringify(tablero))
                return tablero
            })
    }
    return (
    <div 
        onClick={handleClick}
        className='aspect-square min-w-5 bg-white/10 flex justify-center items-center'>
        <div className='text-4xl text-zinc-400 font-bold'>
            {children && children}
        </div>
    </div>
    )
}

export default Box