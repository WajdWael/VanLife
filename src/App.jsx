import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"

import Home from './pages/Home/Home'
import About from './pages/About/About'

// lodares
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail/VanDetail"
import HostVans, { loader as hostVansLoader} from "./pages/Host/HostVans"
import HostVanDetail, { loader as hostVanDetailLoader } from "./pages/Host/HostVanDetail/HostVanDetail"

import { Income, Reviews ,
  HostVanInfo, HostVanPhotos, HostVanPricing
} from './pages/Host/index'

import Dashboard, {loader as dashLoader} from './pages/Host/HostSubTabs/Dashboard'
import Login, {loader as loginLoader, action as loginAction} from "./pages/Login/Login"

import Layout from "./components/layouts/Layout"
import HostLayout from "./components/layouts/HostLayout"
import NotFound from "./pages/NotFound/NotFound"
import Error from "./components/Error"
import { runRequireAuth } from "./utilities/authUtil"
import './api/server'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>

    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} loader={loginLoader} action={loginAction}/>
    <Route path="vans" element={<Vans />} errorElement={<Error />} loader={vansLoader}/>
    <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader}errorElement={<Error />}/>

    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} errorElement={<Error />} loader={dashLoader}/>
      <Route path="income" element={<Income />} loader={runRequireAuth}/>
      <Route path="reviews" element={<Reviews />} loader={runRequireAuth} />
      
      <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
      {/* every one should take [/] [host] [van/id] */}
      <Route path="vans/:id" element={<HostVanDetail />} errorElement={<Error />} loader={hostVanDetailLoader}>
        <Route index element={<HostVanInfo />} loader={runRequireAuth}/>
        <Route path="pricing" element={<HostVanPricing />} loader={runRequireAuth}/>
        <Route path="photos" element={<HostVanPhotos />} loader={runRequireAuth}/>
      </Route>

    </Route>

    <Route path="*" element={<NotFound />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}