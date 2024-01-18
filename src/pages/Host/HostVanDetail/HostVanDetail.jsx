import { Outlet, Link, NavLink, useLoaderData } from 'react-router-dom'
import { checkActive } from '../../../utilities/ActiveCalss'
import { requireAuth } from '../../../utilities/authUtil'
import { getVan } from '../../../api/apiUtility'
import { HostAboutVan } from './HostVanDetail.styled'

export async function loader({ params, request }) {
    await requireAuth(request)
    return getVan(params.id)
}


export default function HostVanDetail() {
    const currentVan = useLoaderData()

    return (
        <HostAboutVan className='container'>
            <Link to=".." relative="path">
                <span className="arrow">&larr;</span>
                <span className="link-title">Back to all vans</span>
            </Link>

            <section className='card-container'>
                <section className="col-content">
                    <div className="col1">
                        <img src={currentVan.imageUrl} alt={currentVan.type} />
                    </div>
                    <div className="col2">
                        <div className="button-container">
                            <i className={`nav-btn-style ${currentVan.type}`}>{currentVan.type}</i> 
                        </div>
                        <h2>{currentVan.name}</h2>
                        <p>${currentVan.price}<span>/day</span></p>
                    </div>
                </section>


                <nav>
                    <NavLink to="." end style={checkActive}>Details</NavLink>
                    <NavLink to="pricing" style={checkActive}>Pricing</NavLink>
                    <NavLink to="photos" style={checkActive}>Photos</NavLink>
                </nav>
                <Outlet context={{ currentVan }} />
                {/* two {{}} means that i am passing object */}
            </section>
        </HostAboutVan>
    )
}