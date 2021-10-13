import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Error = () => {

    return (
        <Wrapper>
            <section className="section">
                <h1>Oops, it's a dead end</h1>
                <Link to="/" className="button">
                    Back Home
                </Link>
            </section>
        </Wrapper>
    )

}


const Wrapper = styled.main ` 

    color: var(--dark-gray);
    text-align: center;
    min-height: calc(100vh - 5rem);
    display: grid;
    place-items: center;

    .section {
        margin: 0 auto;
    }

    h1 {
        margin-bottom: 2rem;
    }

`


export default Error
