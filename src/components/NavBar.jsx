import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import COLORS from '../styles/colors'
import { checkActive } from '../utilities/ActiveCalss'

import logoImage from 'https://vanlife-3cf7c.web.app/logog.png'
import userIcon from 'https://vanlife-3cf7c.web.app/user.png'

export default function NavBar() {
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return (
        <Navbar>
            <Link className="logoPng" to="/">
                <img src={logoImage} alt="Website Logo" />
            </Link>

            <nav className='navContainer'>
                <NavLink style={checkActive} to="host">Host</NavLink>
                <NavLink style={checkActive} to="about">About</NavLink>
                <NavLink style={checkActive} to="vans">Vans</NavLink>
                <Link className="userlogin" to="login">
                    <img src={userIcon} alt="user icon" />
                </Link>
                <button className='orange-btn logout-btn' onClick={fakeLogOut}>Log out</button>
            </nav>
        </Navbar>
    )
}

const Navbar = styled.nav`
    display: flex;
    height: 92px;
    padding: 2rem;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        padding: 1rem;
    }

    a{
        margin-right: 1rem;
        font-weight: 600;
        color: ${COLORS.main_gray};
        transition: .3s all;
        /* min-width: 90px; */
        &:hover {
            color: ${COLORS.mainBG_gray};
            text-decoration: underline;
        }
        @media (min-width: 768px) {
            max-width: 140px;
            font-size: 15px;
        }
        .active{
            text-decoration: underline;
            color: ${COLORS.main_gray};
            font-weight: 700;
        }
    }
    .navContainer {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        height: 92px;
        flex-wrap: wrap;
        align-items: center;

        a{
            @media (max-width: 768px) {
                font-size: 13px;
            }
        }

        .userlogin{
            display: flex;
            justify-content: center;
            align-items: center;

            img{
                width: 18px
            }
        }

    }
    .logoPng{
        max-width: 125px;
    }
    .logout-btn{
        width: auto;
        padding: 0.75rem;
        height: auto;
        font-size: 14px;
        margin: 0;
    }
`