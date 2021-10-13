import React from 'react'
import styled from 'styled-components'


const Loading = () => {

    return (
        <Wrapper>
            <div className="loading"></div>
        </Wrapper>
    )

}


const Wrapper = styled.div ` 

    display: grid;
    place-items: center;
    min-height: calc(100vh - 7rem);

    @keyframes spinner {
        to {
            transform: rotate(360deg);
        }
    }

    .loading {
        width: 6rem;
        height: 6rem;
        margin: 0 auto;
        border-radius: 50%;
        border: 3px solid var(--light-gray);
        border-top-color: var(--medium-gray);
        animation: spinner 0.6s linear infinite;
    }

`


export default Loading
