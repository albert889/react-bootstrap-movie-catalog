import axios from 'axios'

const API_KEY = "bbd4cbf30b4db1252182844eded615bf";
const URLbase = "https://api.themoviedb.org/3"


const urlRegister = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const searchMovie = async (q) => {
    const search = await axios.get(
        `${URLbase}/search/movie?query=${q}&api_key=${API_KEY}`
    )
    console.log(search.data?.results?.filter(item=>!!item.video))
    return search.data
    
}

export const fetchMovie = async (id) => {
    const trailer = await axios.get(`${URLbase}/movie/${id}`, {
        params: {
            api_key: API_KEY,
            append_to_response: "videos"
        }
    })
    console.log(trailer)
    return trailer.data
}

export const selectTrailer = (movies) => {
    fetchMovie(movies.id)
}

export default urlRegister
