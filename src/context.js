import React, { useContext } from 'react'
import useFetch from './useFetch'


const AppContext = React.createContext()


const AppProvider = ({ children }) => {

    let { loading, movies, query, setQuery, page, setPage } = useFetch()

    return (
        <AppContext.Provider
            value={
                {
                    loading,
                    movies,
                    page,
                    setPage,
                    query, 
                    setQuery
                }
            }
        >
            { children }
        </AppContext.Provider>
    )

}


const useGlobalContext = () => {

    return useContext(AppContext)

}


export {

    AppProvider,
    useGlobalContext

}