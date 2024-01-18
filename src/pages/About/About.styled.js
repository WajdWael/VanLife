import styled from "styled-components"
import COLORS from '../../styles/colors'

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;

    .contentHeader{
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        @media (min-width: 768px) {
            max-width: 780px;
            margin-bottom: 1rem;
        }
        h1{
            font-size: 25px;
            @media (min-width: 768px) {
                font-size: 40px;
            }
        }
    }

    .box{
        background: ${COLORS.secondary_orange};
        padding: 3rem;
        margin: 0 1rem 1rem 1rem;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        @media (min-width: 768px) {
            width: 725px;
            height: 275px;
        }

        h1{
            color: ${COLORS.primary_black};
            font-size: 20px;
            @media (min-width: 768px) {
                font-size: 28px;
            }
        }

        .blackBtn{
            padding: 1rem 2rem;
            color: rgba(255, 255, 255, 0.845);
            background-color: rgba(22, 22, 22, 1);
            border-radius: 1rem;
            margin-top: 2rem;
            font-weight: 700;
            font-size: 14px;
            @media (min-width: 768px) {
                font-size: 18px;
            }
        }
    }
`
