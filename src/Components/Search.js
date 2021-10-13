import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useGlobalContext } from '../context'


const Search = () => {

    const { query, setQuery, setPage } = useGlobalContext()

    const handleChange = (e) => {
        setQuery(e.target.value)
        setPage(1)
    }

    return (
        <Wrapper>
            <form onSubmit={(e) => e.preventDefault()} className="section">
                <div>
                    <FaSearch />
                    <input 
                        type="text" 
                        className="search-input"
                        placeholder="Search Movie"
                        value={query}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </Wrapper>
    )

}


const Wrapper = styled.section ` 

    background: var(--dark-gray);
    padding: 1.25rem 0;

    .section {
        margin: 0 auto;
    }

    div {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        font-size: 1.75rem;
        width: 100%;
        background: var(--medium-gray);
        border-radius: var(--border-radius);
        color: var(--white);
        padding: 0.5rem 0.75rem;
        grid-gap: 1rem;
    }

    .search-input {
        border: none;
        outline: none;
        font-size: 1.5rem;
        background: transparent;
        width: 100%;
        color: var(--white);
    }

`


export default Search
