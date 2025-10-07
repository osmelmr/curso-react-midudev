export const getImage = async ({ word }) => {
  if (!word) { word = 'hola' }
  const response = await fetch(`https://cataas.com/cat/says/${word}?json=true`)
  const data = await response.json()
  return data.url
}
