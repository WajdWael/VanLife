import {NavLink, Outlet} from 'react-router-dom'
import styled from 'styled-components'
import { checkActive } from '../../utilities/ActiveCalss'


export default function HostLayout() {

    return (
        <section>
            <Nav>
                <NavLink end style={checkActive}  to=".">Dashboard</NavLink>
                <NavLink style={checkActive} to="income">Income</NavLink>
                <NavLink style={checkActive} to="vans">Vans</NavLink>
                <NavLink style={checkActive} to="reviews">Reviews</NavLink>
            </Nav>
            <Outlet className="container" />
        </section>
    )
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 0 1rem;
    margin: 0 0 2rem 0;

    @media (min-width: 768px) {
        padding: 0 2rem;
    }

    a{
        color: #4d4d4d;
        font-weight: 600;
        transition: all .3s;
        font-size: 13px;

        @media (min-width: 768px) {
            font-size: 18px;
        }

        .active{
            font-weight: 700;
            color: #161616;
            text-decoration:underline;
        }
    }

`