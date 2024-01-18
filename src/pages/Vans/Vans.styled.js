import styled from "styled-components";

export const FilterLink = styled.button`
    color: rgba(77, 77, 77, 1);
    background: none;
    border: none;
    font-size: 1rem;
    padding: 6px 0px 6px 0px;
    text-decoration: underline;
    cursor: pointer;
`
export const VanContainer = styled.section`
    .van-list{
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: 1fr 1fr;
        gap: .5rem;

        @media (min-width: 768px) {
            gap: 4rem 1rem;
            margin-bottom: 2rem;
        }
    }

    .van-title{
            @media(max-width: 768px){
                padding: 1rem 0;
                max-width: 320px;
            }

            a{
            font-size: 12px;
            color: #161616;
            @media(min-width: 768px){
                font-size: 20px;
            }
            img{
                border-radius: 5px;
            }
            .van-info{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px;
                position: relative;

                p{
                    display: flex;
                    font-weight: 700;
                }

                span{
                    position: absolute;
                    bottom: -5px;
                    font-size: 15px;
                    font-weight: 500;
                }
            }
        }
    }


`

export const ButtonsContainer = styled.section`
    padding: 1rem;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.25rem 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        font-size: 13px;
        padding: 0;
    }
`

// export const HeaderTitle = styled.h1`
//     color: ${COLORS.primary_black};
//     padding: 0 1rem;
//     margin-bottom: 2rem;
//     font-size: 43px;
// `