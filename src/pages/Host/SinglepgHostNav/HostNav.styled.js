import styled from "styled-components"

export const DetailsContainer = styled.section`
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-direction: column;
    font-size: 18px;

    @media (min-width: 768px) {
        font-size: 22px;
    }

    h5{
        font-weight: 800;
        color: #161616;
        span{
            color: #4d4d4d;
            font-weight: 500;
        }
    }
`

export const PhotosSection = styled.section`
    margin-top: 2rem;
    margin-bottom: 2rem;

    img{
        max-width: 150px;
        border-radius: 5px;
    }
`

export const HostVanContainer = styled.section`
    margin-top: 2rem;
    margin-bottom: 2rem;
    h3{
        font-weight: 700;
        font-size: 24px;
        color: #161616;
        span{
            font-weight: 300;
        }
    }
`