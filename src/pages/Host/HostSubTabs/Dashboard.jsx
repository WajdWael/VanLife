import { BsStarFill } from "react-icons/bs"
import { useLoaderData, defer, Link, Await } from "react-router-dom"
import { Suspense } from 'react'
import { VansSection } from '../HostVans'
import { requireAuth } from "../../../utilities/authUtil"
import { getHostVans } from "../../../api/apiUtility"
import { DashboardSection } from "./styles.styled"


export async function loader({ request }) {
  await requireAuth(request)
  return defer({ vans: getHostVans() })
}


export default function Dashboard() {
  const loaderdata = useLoaderData()

  function renderVanElements(vans) {
    const hostVansEls = vans.map(van => (
      <div key={van.id} className='van-link-card'>
        <div className="card-container" key={van.id}>
          <div className="card-content">
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className="content">
              <h3>{van.name}</h3>
              <p>${van.price}/day</p>
            </div>
          </div>
          <Link to={`vans/${van.id}`}>View</Link>
        </div>
      </div>
    ))
    return (
      <VansSection>
        {hostVansEls}
      </VansSection>
    )
  }

  return (
    <DashboardSection>
      <section className="flex bgOrange">
        <div className="dashboard-content">
          <h1>Welcome!</h1>
          <p>Income last <span>30 days</span></p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>

      <section className="flex host-dashboard-host">
        <h1>Review score</h1>
        <BsStarFill className="star" />
        <p><span>5.0</span>/5</p>
        <Link to="reviews">Details</Link>
      </section>

      <section className="flex host-dashboard-vans">
        <div className="top flex">
          <h1>Your listed vans</h1>
          <Link to="vans">View all</Link>
        </div>
      </section>

      <Suspense fallback={<h2 className="container">Loading...</h2>}>
        <Await resolve={loaderdata.vans}>{ renderVanElements }</Await>
      </Suspense>
    </DashboardSection>
  )
}

