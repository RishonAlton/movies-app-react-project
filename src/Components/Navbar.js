import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import mainLogo from '../Images/Logo-1.svg'
import secondaryLogo from '../Images/Logo-2.svg'


const Navbar = () => {

    return (
        <Wrapper>
            <div className="nav-center">
                <Link to='/'>
                    <img src={mainLogo} alt="" className="main-logo" />
                </Link>
                <img src={secondaryLogo} alt="" className="secondary-logo" />
            </div>
        </Wrapper>
    )

}


const Wrapper = styled.nav `

    background: var(--dark-gray);
    height: 4rem;
    display: grid;
    place-items: center;

    .nav-center {
        margin: 0 auto;
        width: 90vw;
        height: 100%;
        max-width: var(--max-width);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .main-logo {
        width: 12rem;
    }

    img {
        width: 6rem;
        height: 3rem;
        object-fit: contain;
    }

    @media all and (max-width: 500px) {
        .main-logo {
            width: 8rem;
        }
    }

    @media all and (max-width: 275px) {
        .main-logo {
            width: 6rem;
        }
        img {
            width: 4rem;
        }
    }

`


export default Navbar
