import React from 'react'
import styled from 'styled-components'
import defaultImage from '../Images/Default Image.jpg'


const Actors = ({ cast }) => {

    return (
        <Wrapper className="section">
            <h3>Actors</h3>
            <article className="actors">
                {
                    cast.map(actor => {
                        const { id, name, character, profile_path } = actor
                        const image = profile_path ? `https://image.tmdb.org/t/p/w780${profile_path}` : defaultImage
                        return (
                            <div className="actor" key={id}>
                                <img src={image} alt={name} className="actor-image" />
                                <div className="actor-info">
                                    <h5>{name}</h5>
                                    <p>{character}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </article>
        </Wrapper>
    )

}


const Wrapper = styled.section ` 


    h3 {
        color: var(--medium-gray);
        letter-spacing: unset;
        margin-bottom: 1.5rem;
    }

    .actors {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 2rem;
        justify-content: center;
    }

    .actor {
        background: var(--dark-gray);
        border-radius: var(--border-radius);
        text-align: center;
        padding: 0.25rem;
    }

    .actor-image {
        border-radius: var(--border-radius);
    }

    .actor-info {
        padding: 0.75rem 0 0.5rem 0;
        h5 {
            margin-bottom: 0.5rem;
            letter-spacing: unset;
            font-size: 1.1rem;
        }
        p {
            margin: 0;
        }
    }

    @media all and (max-width: 300px) {
        .actors {
            grid-template-columns: 1fr;
        }
    }

`


export default Actors
