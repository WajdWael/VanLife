import {Suspense} from 'react'
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await
}  from "react-router-dom"
import { VanContainer, ButtonsContainer, FilterLink } from './Vans.styled.js'
import { getVans } from '../../api/apiUtility.js'

export function loader() {
  return defer({ vans: getVans() })
}
export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get("type")
  const dataPromise = useLoaderData()

  const checkSelect = (val) => typeFilter ===
    (val) ? "selected" : "";

  const handleFilter = (key, value) => {
    setSearchParams(prevParams => {
      if (value == null) {
        prevParams.delete(key)
      } else { 
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  function renderVanElement(vans) {
      const displayedVans = typeFilter
      ? vans.filter(van => van.type === typeFilter)
      : vans
      const vanElements = displayedVans.map(van => (
      <div key={van.id} className="van-title">
        <Link to={van.id}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter
          }}>
          <img src={van.imageUrl} />
          <div className="van-info">
              <h3>{van.name}</h3>
              <p>${van.price}<span>/day</span></p>
          </div>
          <i className={`nav-button ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
      ))
      return (
        <>
          <ButtonsContainer className="links">
            <button
              className={`nav-button simple ${checkSelect("simple")}`}
              onClick={() => handleFilter("type", "simple")}
            > Simple </button>
            <button
              className={`nav-button luxury ${checkSelect("luxury")}`}
              onClick={() => handleFilter("type", "luxury")}
            >Luxury</button>
            <button
            className={`nav-button  rugged ${checkSelect("rugged")}`}
            onClick={() => handleFilter("type", "rugged")}
            >Rugged</button>
            {typeFilter ? (
                  <FilterLink
                    onClick={() => handleFilter("type", null)}
                  >Cleafilter</FilterLink>
            ) : null}
          </ButtonsContainer>

          <section className="van-list">{vanElements}</section>
        </>
      )
  }
  return (
    <VanContainer className="container">
      <h1 className="HeaderTitle">Explore our van options</h1>

      <Suspense fallback={<h2 className='container'>Loading vans....</h2>}>
        <Await resolve={dataPromise.vans}>
          {renderVanElement}
        </Await>
      </Suspense>
    </VanContainer>
  )
}
