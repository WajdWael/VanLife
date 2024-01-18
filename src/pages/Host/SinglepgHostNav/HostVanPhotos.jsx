import { useOutletContext } from 'react-router-dom'
import { PhotosSection } from './HostNav.styled'

export default function HostVanPhotos() {
    const {currentVan} = useOutletContext()
    return (
        <PhotosSection>
            <img src={currentVan.imageUrl} alt={`photo of ${currentVan.name}`} />
        </PhotosSection>
    )
}