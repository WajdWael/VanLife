import { Link } from 'react-router-dom'
import styled from 'styled-components'
import error404image from 'https://vanlife-3cf7c.web.app/login/oops404.svg'

export default function NotFound() {
    return (
        <Page404>
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to="/" className='button'>Return to Home</Link>

            <div className="img">
                <img src={error404image} alt="Graphics" />
                <a href="https://storyset.com/web">Web illustrations by Storyset</a> 
            </div>
        </Page404>
    )
}

const Page404 = styled.section`
    min-height: calc(100vh - 192px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    text-align: center;

    h1{
        font-size: 30px;
        @media(min-width: 768px){
            max-width: 700px;
            font-size: 50px;
        }
    }

    a{
        text-align: center;
        color: #161616;
    }

    .button{
        padding: 9px 26px;
        width: 100%;
        background: #FF8C38;
        border: none;
        color: white;
        font-weight: 700;
        font-size: 19px;
        border-radius: 5px;
        margin: 3rem 0;
        max-width: 200px;
    }
`