const URL_FACTS = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const response = await fetch(URL_FACTS)
  const data = await response.json()
  return data.fact
}
