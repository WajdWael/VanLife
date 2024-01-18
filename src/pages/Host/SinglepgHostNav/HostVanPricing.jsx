import { useOutletContext } from "react-router-dom"
import { HostVanContainer } from "./HostNav.styled"

export default function HostVanPricing() {
    const { currentVan } = useOutletContext()
    return (
        <HostVanContainer>
            <h3>
                ${currentVan.price}
                <span>/day</span>
            </h3>
        </HostVanContainer>
    )
}