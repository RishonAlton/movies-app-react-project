import React from 'react'
import styled from 'styled-components'
import { formatTime, formatPrice } from '../utils'


const MovieDetails = ({ runtime, budget, revenue }) => {

    return (
        <Wrapper>
            <article className="section">
                <div>
                    Running time: { formatTime(runtime) }
                </div>
                <div>
                    Budget: { formatPrice(budget) }
                </div>
                <div>
                    Revenue: { formatPrice(revenue) }
                </div>
            </article>
        </Wrapper>
    )

}


const Wrapper = styled.section ` 

    background: var(--dark-gray);

    .section {
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem 3rem;
        padding: 2rem 0;
        justify-content: center;
    }

    div {
        background: var(--medium-gray);
        padding: 1rem 2rem;
        border-radius: var(--border-radius);
        margin: 0 auto;
        width: 100%;
        text-align: center;
    }

    @media all and (max-width: 720px) {
        .section {
            grid-template-columns: 1fr;
            grid-gap: 0.5rem 3rem;
        }
    }

`


export default MovieDetails
