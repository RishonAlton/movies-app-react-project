import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import Loading from './Loading'


const Hero = () => {

    const { movies, loading } = useGlobalContext()

    if(loading) {
        return <Loading />
    }

    const movie = movies && movies.results[0]

    if(!movie) {
        return <Wrapper style={{ background: "#000" }} />
    }
        
    const { title, overview, backdrop_path } = movie 

    return (
        <Wrapper style={backdrop_path && {background: `url(${"https://image.tmdb.org/t/p/w1280" + backdrop_path}) center/cover no-repeat`}}>
            <article className="section">
                <h2>{title}</h2>
                <p>{overview}</p>
            </article>
        </Wrapper>
    )

}


const Wrapper = styled.header ` 

    min-height: calc(100vh - 9.4rem);
    position: relative;
    display: flex;
    align-items: flex-end;
    padding-bottom: 3rem;
    animation: hero-image 1s;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%);
        opacity: 0.5;
    }

    .section {
        margin: 0 auto;
        z-index: 2;
    }

    h2 {
        margin-bottom: 2rem;
    }

    p {
        max-width: 690px;
        font-size: 1.2rem;
    }

    @keyframes hero-image {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

`


export default Hero
