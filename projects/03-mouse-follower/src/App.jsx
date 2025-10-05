import {useState, useEffect} from "react"

function App() {
  const [seguir, setSeguir] = useState(false)
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })
  useEffect(()=>{
    seguir && window.addEventListener('pointermove', handleMove)
    !seguir && setPosition({x:0,y:0})
    return ()=> {window.removeEventListener('pointermove', handleMove)}
    
  },[seguir])

  const handleMove = (e) => {
    const {clientX,clientY} = e
    setPosition(prev=>{
      const newPosition = {...prev,x:clientX,y:clientY}
      return newPosition
    })
  }

  const handleClick = () => {
    setSeguir(prev=>!prev)
  }

  return (
    <>
    <div className='aspect-square rounded-full w-12 bg-black absolute -top-6 -left-6 pointer-events-none'
        style={{transform : `translate(${position.x}px, ${position.y}px)`}}
    ></div>
    <section className='gap-10 flex flex-col'>
    <h1 className='text-6xl text-white'>Mouse Follower</h1>
    <div className='flex justify-center'>
      <button 
        onClick={handleClick}
        className='bg-sky-300 rounded-lg px-2 py-1 text-xl'>
          {!seguir ? <span>seguir</span> : <span>dejar de seguir</span>}
      </button>
    </div>
    </section>
    </>
  )
}

export default App
