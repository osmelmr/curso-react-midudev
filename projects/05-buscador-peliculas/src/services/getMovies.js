export const getMovies= async(query)=>{
    const URL = `https://www.omdbapi.com/?apikey=ec26a491&s=${query}`
    const res = await fetch(URL)
    const data= await res.json()

    return data
}
