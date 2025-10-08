import { useState, useRef, useEffect } from 'react'
import { useGetMovies } from './hooks/useMovies'
import './App.css'
//import withResults from './mocks/with-results'
//import withoutResults from './mocks/no-results'

//buscador
function App() {
  //const moviesResponse = withoutResults.Search
  const [query, setQuery] = useState('')
  const ref = useRef(query)
  const { moviesResponse, busqueda } = useGetMovies()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    busqueda(query)
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (ref.current === query && query.length >= 2) { return }
    busqueda(query)
    ref.current = query
  }

  return (
    <>
      <section className='flex flex-col items-center h-full gap-6 bg-[#151515]'>
        <form className='min-h-15 w-full flex justify-end items-center gap-4' onSubmit={handleSubmit}>
          <input type='text'
            className='min-h-10 outline outline-3 outline-solid outline-white px-2 hover:outline-4 focus:outline-4'
            placeholder='Avengers, Matrix, ...'
            value={query}
            name='query'
            onChange={handleChange}
          />
          <button type='submit'>Search</button>
        </form>
        {
          moviesResponse.Search ?
            <h2 className='text-center'>results</h2> :
            <h2 className='text-center'>no results</h2>
        }

        <section className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {moviesResponse.Search &&
            moviesResponse.Search.map((movie, index) =>
              <article key={index} className='h-full w-full'>
                <h2>{movie.Title}</h2>
                <h3>{movie.Year}</h3>
                {movie.Poster && movie.Poster !== 'N/A' ?
                  <div>
                    <img
                      className='object-cover h-full w-full'
                      src={movie.Poster}
                      alt={`${movie.Title}, ${movie.Title}, m.media-amazon.com`}
                    />
                  </div>
                  :
                  <p>imagen no disponible</p>
                }
              </article>
            )
          }
        </section>
      </section>

    </>
  )
}

export default App
