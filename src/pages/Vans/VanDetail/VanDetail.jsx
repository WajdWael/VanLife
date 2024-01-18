import { Link, useLocation, useLoaderData } from "react-router-dom";
import { DetailsSection } from './VanDetail.styled';
import { getVan } from '../../../api/apiUtility';

export function loader({ params }) {
  return getVan(params.id)
}

export default function VanDetail() {
  const location = useLocation()
  const van = useLoaderData()

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <DetailsSection className="container">
      <Link to={`..${search}`} relative="path">
        <span className="arrow">	&larr;</span>
        <span className="link-title">Back to {type} vans</span>
      </Link>
      <div className="card-bus">
          <section className="card-content">
            <div className="col1">
              <img src={van.imageUrl} alt="van" />
            </div>
            <div className="col2">
              <i className={`nav-button ${van.type} selected`}>{van.type}</i>
              <h2>{van.name}</h2>
              <p className="number"><span>${van.price}</span>/day</p>
              <p>{van.description}</p>
              <button>Rent this van</button>
            </div>
          </section>
      </div>
    </DetailsSection>
  )
}
