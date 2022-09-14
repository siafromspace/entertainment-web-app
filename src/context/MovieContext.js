import { createContext, useEffect, useRef, useState } from "react";

export const MovieContext = createContext()

const MovieContextProvider = (props) => {
    const movies = useRef([])
    const tvSeries = useRef([])
    const trending = useRef([])
    const recommended = useRef([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const BASE_URL = "https://api.themoviedb.org/3/"
    const API_KEY = "4ccaf9505cc3bec7783ded09af8edbe0"
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

    const fetchData = (infoType, searchParams) => {
        const url = new URL(BASE_URL + infoType)
        url.search = new URLSearchParams({ api_key: API_KEY })
        return fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource')
                } return res.json()
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
                setIsLoading(false)
            })

    }
    useEffect(() => {
        const getData = async (searchParams) => {
            await fetchData("discover/movie/", searchParams).then(data => {
                movies.current = data.results
                setIsLoading(false)
                setError(null)
            })
            // console.log(movies.current)
        }
        getData()
    }, [])

    useEffect(() => {
        const getData = async (searchParams) => {
            await fetchData("trending/all/week", searchParams).then(data => {
                trending.current = data.results
                setIsLoading(false)
                setError(null)
            })
        }
        getData()
    }, [])

    useEffect(() => {
        const getData = async (searchParams) => {
            await fetchData("discover/tv/", searchParams).then(data => {
                tvSeries.current = data.results
                setIsLoading(false)
                setError(null)
            })
            // console.log(tvSeries.current)
        }
        getData()
    }, [])

    useEffect(() => {
        const getData = async (searchParams) => {
            await fetchData("trending/all/day", searchParams).then(data => {
                recommended.current = data.results
                setIsLoading(false)
                setError(null)
            })
            console.log(recommended.current)
        }
        getData()
    }, [])

    return (
        <MovieContext.Provider value={{ movies, tvSeries, trending, recommended, isLoading, error, IMAGE_BASE_URL }}>
            {props.children}
        </MovieContext.Provider>
    );
}

export default MovieContextProvider;