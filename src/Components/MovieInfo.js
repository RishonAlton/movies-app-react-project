import React from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../useFetch'
import Loading from './Loading'
import MovieDetails from './MovieDetails'
import Actors from './Actors'
import defaultImage from '../Images/Default Image.jpg'


const imageBaseURL = "https://image.tmdb.org/t/p/w1280"


const MovieInfo = () => {

    const { id } = useParams()
    const { loading: movieLoading, info: movieInfo } = useFetch(`movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
    const { loading: creditLoading, info: creditInfo } = useFetch(`movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`)

    if (movieLoading || creditLoading) {
        return <Loading />
    }

    const { backdrop_path, poster_path, title, overview, vote_average: rating } = movieInfo
    const { crew } = creditInfo

    const image = poster_path ? (imageBaseURL + poster_path) : defaultImage

    return (
        <Wrapper>
            <header>
                <h4>
                    <Link to="/">Home</Link>
                    <span>|</span>
                    {title}
                </h4>
            </header>
            <section 
                className="hero-section"
                style={backdrop_path ? {background: `url(${imageBaseURL + backdrop_path}) center / cover no-repeat`} : {background: `#000`}}
            >
                <article className="section showcase-article">
                    <img src={image} alt={title} className="movie-image" />
                    <div className="movie-details">
                        <h3>{title}</h3>
                        <h5>Plot</h5>
                        <p>{overview}</p>
                        <div className="more-info">
                            <div>
                                { rating !== 0 && <h5 className="rating-title">Rating</h5> }
                                { crew.length > 0 && <h5>Director</h5> }
                            </div>
                            <div>
                                {
                                    rating !== 0 && (
                                        <span className="rating">
                                            <h5>{rating}</h5>
                                        </span>
                                    )
                                }
                                {
                                    crew.length > 0 && (
                                        <p className="director">
                                            {
                                                crew.map(person => person.job === "Director" && person.name)
                                            }
                                        </p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <MovieDetails { ...movieInfo } />
            { creditInfo.cast.length > 0 &&  <Actors { ...creditInfo } /> }
        </Wrapper>
    )

}


const Wrapper = styled.main ` 

    header {
        background: var(--medium-gray);
        padding: 1.25rem 0;
        h4 {
            width: 90vw;
            max-width: var(--max-width);
            margin: 0 auto;
            font-weight: lighter;
            letter-spacing: unset;
            span {
                margin: 0 0.5rem;
            }
        }
    }

    .hero-section {
        min-height: 100vh;
        animation: hero-image 1s;
        display: grid;
        place-items: center;
    }
    
    .showcase-article {
        background: rgba(0, 0, 0, 0.7);
        border-radius: var(--border-radius);
        min-height: 90vh;
        z-index: 1;
        margin: 3rem auto;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 3rem 0.25rem;
        .movie-details {
            padding: 3rem 0;
            width: 90%;
            margin: 0 auto;
        }
    }

    .movie-image {
        height: 100%;
        border-radius: var(--border-radius);
        min-width: 350px;
        transition: var(--transition);
        &:hover {
            opacity: 0.8;
        }
    }

    .movie-details {
        h3 {
            margin-bottom: 1.75rem;
        }
        h5 {
            text-transform: uppercase;
        }
    }

    .more-info {
        margin-top: 2rem;
        div {
            display: flex;
            align-items: center;
            .rating-title {
                width: 100px;
            }
        }
    }

    .rating {
        display: block;
        width: 100px;
        h5 {
            background: var(--white);
            color: #000;
            border-radius: 50%;
            height: 2.25rem;
            width: 2.25rem;
            display: grid;
            place-items: center;
            margin: 0;
            letter-spacing: unset;
        }
    }

    .director {
        margin: 0;
    }

    @keyframes hero-image {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media all and (max-width: 750px) {
        .showcase-article {
            grid-template-columns: 1fr;
            .movie-details {
                padding: 0;
                padding-bottom: 2rem;
                width: 90%;
                margin: 0 auto;
            }
        } 
        .movie-image {
            min-width: unset;
        }
    }

`


export default MovieInfo
