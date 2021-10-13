import { useEffect, useState } from "react"
import axios from "axios"


const APIBaseURL = `https://api.themoviedb.org/3/`


const useFetch = (URLParams) => {

    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState({})
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)
    const [info, setInfo] = useState({})

    const fetchData = async (url) => {
        setLoading(true)
        try {
            const { data } = await axios(url)
            if (URLParams) {
                setInfo(data)
            }
            else {
                setMovies(previousState => {
                    return {
                        ...data,
                        results: page > 1 ? [...previousState.results, ...data.results] : [...data.results]
                    }
                })
            }
            setLoading(false)
        } 
        catch (error) {
            console.log(error.response.data)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (URLParams) {
            fetchData(APIBaseURL + URLParams)
        }
        else {
            if(query && !query.startsWith(' ')) {
                fetchData(APIBaseURL + `search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}`)
            }
            else {
                fetchData(APIBaseURL + `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
            }
        }
        // eslint-disable-next-line
    }, [URLParams, query, page])

    return {
        loading,
        movies,
        query,
        setQuery,
        page, 
        setPage,
        info
    }

}


export default useFetch