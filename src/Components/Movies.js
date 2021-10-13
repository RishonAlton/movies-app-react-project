import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import defaultImage from '../Images/Default Image.jpg'


const imageBaseURL = "https://image.tmdb.org/t/p/w500"


const Movies = () => {

    const { movies, page, setPage, loading, query } = useGlobalContext()

    const handlePage = () => {
        setPage(page + 1)
    }

    if(loading && page === 1) {
        return <Loading />
    }

    if(movies.results.length === 0) {
        return (
            <Wrapper className="section">
                <h2>No Movies matched your Search</h2>
            </Wrapper>
        )
    }

    return (
        <Wrapper className="section">
            <h3>
                {
                    query ? "Search Result" : "Popular Movies"
                }
            </h3>
            <article className="movies">
                {
                    movies.results.map((movie, index) => {
                        const { poster_path: image, id, title } = movie
                        return (
                            <div className="movie" key={index}>
                                <Link to={`/movies/${id}`}>
                                    <img src={image ? (imageBaseURL + image) : defaultImage} alt={title} />
                                </Link>
                            </div>
                        )
                    })
                }
            </article>
            {
                movies.total_pages > page && (
                    <button className="button" disabled={loading} onClick={handlePage}>
                        { loading ? "Loading..." : "Load More" }
                    </button>
                )
            }
        </Wrapper>
    )

}


const Wrapper = styled.section ` 

    h3 {
        color: var(--medium-gray);
    }

    .movies {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        justify-content: center;
        grid-gap: 2rem;
        margin-top: 2rem;
    }

    .movie {
        border-radius: var(--border-radius);
    }

    img {
        height: 100%;
        width: 100%;
        border-radius: var(--border-radius);
        transition: var(--transition);
    }

    img:hover {
        opacity: 0.8;
    }

    .button {
        margin-top: 1.5rem;
    }

    h2 {
        color: var(--dark-gray);
        text-align: center;
    }

`


export default Movies
