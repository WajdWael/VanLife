import COLORS from "../../styles/colors"
import styled from "styled-components"


export const LoginSection = styled.section`
    .errorMessage{
        border: 2px solid rgb(179 43 0);
        border-radius: 5px;
        padding: 1rem;
        color: white;
        font-weight: 700;
        background: #ff0000ab;
        font-size: 20px;
        width: 90%;
        margin: 0 auto 1rem;
    }

    .content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fffefdef;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 5rem;
    @media (min-width: 768px) {
        max-width: 1066px;
        margin: 2rem auto 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        flex-direction: row;
    }
    p{
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 1.5rem;
    }
    img{
        max-width: 535px;
    }

    .form{
        input{
            width: 100%;
            border-radius: 5px;
            padding: 1rem;
            border: 1px solid ${COLORS.light_gray};
            margin-bottom: 2px;
            background-color: #fdefdd;

            &::placeholder{
                font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
                color: #7a7a7a
            }
        }
        /* button{
            border: none;
            cursor: pointer;
            font-size: 18px;
            background: ${COLORS.primary_orange};
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: ${COLORS.light_orange};
            font-weight: 700;
            width: 100%;
            text-align: center;
            margin-top: 1rem;
        } */
    }
    }
`