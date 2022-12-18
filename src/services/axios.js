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
    return search.data
}

export default urlRegister
