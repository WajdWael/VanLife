import { Link, useLoaderData, defer, Await } from 'react-router-dom'
import { Suspense } from 'react'
import styled from 'styled-components'
import { requireAuth } from '../../utilities/authUtil'
import { getHostVans } from '../../api/apiUtility'

export async function loader({ request }) {
    await requireAuth(request)
    return defer({ vans: getHostVans() })
}

export default function HostVans() {
    const dataPromise = useLoaderData()

    function renderVanElements(vans) {
        const hostVansEls = vans.map(van => (
            <Link to={van.id} key={van.id} className='van-link-card'>
                <div className="card-content" key={van.id}>
                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                    <div className="content">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
            </Link>
        ))
        return (
            <VansSection>
                {hostVansEls}
            </VansSection>
        )
    }
    return (
        <section className='container'>
            <h1 className="HeaderTitle">Your listed vans</h1>
            <Suspense fallback={<h2 className='container'>Loading vans ...</h2>}>
                <Await resolve={dataPromise.vans}>
                    {renderVanElements}
                </Await>
            </Suspense>

        </section>
    )
}

export const VansSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 5rem;

    .van-link-card{
        color: #161616;
        width: 100%;
        @media (min-width: 768px) {
            width: 95%;
        }

        .card-content{
            display: flex;
            justify-content: start;
            align-items: center;
            background: white;
            border-radius: 5px;
            gap: 1.5rem;
            padding: 1rem;

            img{
                width: 100px;
                border-radius: 5px;
            }

            .content{
                font-size: 20px;
                display: flex;
                justify-content: start;
                align-items: start;
                flex-direction: column;
                gap: 0.5rem;
                font-weight: 400;

                h3{
                    font-weight: 700;
                }
            }
        }
    }


`