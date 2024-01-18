import { Outlet } from 'react-router-dom'
// for child route.

import NavBar from '../NavBar'
import Footer from '../Footer'

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;