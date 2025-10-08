import { getMovies } from '../services/getMovies'
import { useState, useCallback } from 'react'
import debounce from "just-debounce-it";

export const useGetMovies = () => {
  const [moviesResponse, setMoviesResponse] = useState({})
  const busqueda = useCallback(debounce(
    (search) => getMovies(search).then(movies => setMoviesResponse(movies)), 400
  ), [])

  return { busqueda, moviesResponse }
}