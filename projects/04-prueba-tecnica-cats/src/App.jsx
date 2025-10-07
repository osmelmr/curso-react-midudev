import { useRefreshFact } from './hooks/useRefreshFact'
import { useGetCat } from './hooks/useGetCat'
import { useEffect } from 'react'

const App = () => {
  const { fact, refreshFact } = useRefreshFact()
  const { image, newImage } = useGetCat({})

  useEffect(() => {
    const palabra = fact.split(' ')[0]
    newImage({ word: palabra })
  }, [fact])

  return (
    <section className='flex w-full flex-col items-center '>
        <h1>Cat page</h1>
        <button type='button' className='bg-zinc-600 text-2xl px-4 py-2 rounded-sm' onClick={refreshFact}>click</button>
        <article className='flex flex-col bg-red'>
            {
                fact && image &&
                <>
                    <p className=''>{fact}</p>
                    <div className='overflow-hidden h-[700px] w-[500px] flex justify-center items-end'>
                        <img
                            alt={`picture of a cat says ${fact}`}
                            src={`${image}`}
                            className=' object-cover w-full h-full'
                        />
                    </div>
                </>
            }
        </article>
    </section>
  )
}

export default App
