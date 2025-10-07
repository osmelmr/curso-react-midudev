import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export const useRefreshFact = () => {
  const [fact, setFact] = useState('')

  useEffect(() => {
    const peticion = async () => {
      const newFact = await getRandomFact()
      setFact(newFact)
    }
    peticion()
  }, [])

  const refreshFact = () => {
    const peticion = async () => {
      const newFact = await getRandomFact()
      setFact(newFact)
    }
    peticion()
  }
  const word = fact.split(' ')[0]
  return { fact, word, refreshFact }
}
