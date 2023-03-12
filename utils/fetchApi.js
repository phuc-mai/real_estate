import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '24eb90b30cmsh52ec12b054b7cf5p192168jsn2b5f560d0286',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data
}