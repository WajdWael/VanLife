import { useOutletContext } from 'react-router-dom'
import { DetailsContainer } from './HostNav.styled'

export default function HostVanInfo() {
    const {currentVan} = useOutletContext()
    return (
        <DetailsContainer>
            <h5> Name: <span>{ currentVan.name }</span> </h5>
            <h5> Category: <span>{ currentVan.type }</span> </h5>
            <h5> Description: <span>{ currentVan.description }</span> </h5>
            <h5> Visibility: <span>Public</span> </h5>
        </DetailsContainer>
    )
}

