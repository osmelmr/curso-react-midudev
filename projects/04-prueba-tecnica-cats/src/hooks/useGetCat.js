import { getImage } from '../services/getImage'
import { useState, useEffect } from 'react'

export const useGetCat = ({ word }) => {
  const [image, setImage] = useState('')
  useEffect(() => {
    const peticion = async () => {
      const url = await getImage({ word })
      setImage(url)
    }
    peticion()
  }, [])

  const newImage = ({ word }) => {
    const peticion = async () => {
      const url = await getImage({ word })
      setImage(url)
    }
    peticion()
  }

  return { image, newImage }
}
