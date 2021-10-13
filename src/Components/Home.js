import React from 'react'
import Hero from './Hero'
import Movies from './Movies'
import Search from './Search'
import { useGlobalContext } from '../context'


const Home = () => {

    const { query } = useGlobalContext()

    return (
        <main>
            { !query && <Hero /> }
            <Search />
            <Movies />
        </main>
    )

}


export default Home
