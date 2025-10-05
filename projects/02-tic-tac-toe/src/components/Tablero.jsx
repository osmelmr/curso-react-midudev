import {useState, useEffect} from 'react'
import Box from './box'
import {winner} from './logica'

const Tablero = () => {
    const [turno,setTurno]=useState(false)
    const [tablero, setTablero]=useState(Array(9).fill(null))
    const [fin, setFin] = useState(false)
    const [Winner, setWinner]=useState('')

    useEffect(()=>setTurno(prev=>!prev),[tablero])
    useEffect(()=>{
        const W = winner(tablero)
        if (W){
            setFin(true)
            setWinner(W)
        }
        if (tablero.every(element=> element!==null) ){
            console.log('fin')
            setFin(true)
            setWinner('Empate')
        }
    },[tablero])

    const handleClick = () => {
        setTablero(Array(9).fill(null))
        setFin(false)
        setWinner('')
    }

    return (
    <>
    <section className='relative'>
        <div className='grid grid-cols-3 gap-3 h-96 w-96'>
            {tablero.map((pos, index) => (
                <Box  
                    key={index} 
                    index={index} 
                    setTablero={setTablero} 
                    contenido={pos} 
                    turno={turno} 
                    fin={fin}
                />
                )
            )}
        </div>
        {Winner && 
            <div className='absolute h-full w-full bg-white/50 flex flex-col justify-center items-center top-0 left-0 gap-4'>
                <div className='aspect-square min-w-20 bg-zinc-600 flex justify-center items-center'>
                        <div className='text-5xl text-white font-bold'>
                            {Winner}
                        </div>
                </div>
                <button onClick={handleClick}
                        className='rounded-lg bg-white px-4 py-2'>
                    Restart
                </button>
            </div>
            }
    </section>
    <div className='w-full flex justify-center'>
        <div className='aspect-square min-w-20 max-w-30 bg-zinc-600 flex justify-center items-center'>
            <div className='text-5xl text-white font-bold'>
                {turno ? 'X':'O'}
            </div>
        </div>
    </div>
    </>
    )
}

export default Tablero