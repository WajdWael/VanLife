import styled from "styled-components";
import COLORS from '../../styles/colors'
export const HomeSection = styled.section`
    background-image: linear-gradient(rgba(0, 0, 0, 0.46), #0000005e),url(/src/assets/images/mainBG.png);
    background-position: center;
    background-color: rgba(37, 37, 37, 1);
    background-size: cover;
    height: calc(100vh - 192px);

    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
        gap: 1rem;
        color: ${COLORS.main_white};
        padding: 2rem;

        @media (min-width: 768px) {
            padding: 5rem;
            max-width: 800px;
            margin: 0 auto;
        }

        h1{
            font-size: 35px;
            @media (min-width: 768px) {
                font-size: 45px;
            }
        }

        a{
            font-size: 18px;
            background: ${COLORS.primary_orange};
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: ${COLORS.light_orange};
            font-weight: 700;
            width: 100%;
            text-align: center;
            margin-top: 1rem;
        }
    }
`