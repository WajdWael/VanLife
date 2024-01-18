import styled from "styled-components";

export const DetailsSection = styled.section`
    a{
        color: #201F1D;
        font-weight: 600;
        justify-content: center;
        display:block;
        align-items: center;
        font-size: 20px;
        @media (min-width: 768px) {
            display: flex;
            width: 30%;
        }

        .link-title{
            text-decoration: underline;
        }
        .arrow{
            color: #6a6a6a;
            margin-right: 0.5rem;
        }
    }

    .card-bus{
        padding: 3rem 0;

        .card-content{
            display: block;
            gap: 3rem;
            justify-content: center;
            align-items: center;
            @media (min-width: 768px) {
                display: flex;
            }

            .col1{
                img{
                    border-radius: 5px;
                    max-width: 678px;
                }
            }

            .col2{
                max-width: 475px;
                display: flex;
                justify-content: start;
                align-items: start;
                flex-direction: column;
                margin-top: 3rem;

                @media (min-width: 768px) {
                    gap: 2rem;
                    margin-top: 0;
                }

                h2{
                    margin: 1rem 0 0 0;
                    font-size: 35px;
                    @media (min-width: 768px) {
                        margin: 1.5rem 0;
                        font-size: 45px;
                    }
                }
                .number{
                    font-weight: 500;
                    span{
                        font-size: 26px;
                        font-weight: 600;
                    }
                }
                p{
                    margin: 1rem 0;
                    font-weight: 500;
                    font-size: 15px;
                    @media (min-width: 768px) {
                        margin: 1.5rem 0;
                        font-size: 24px;
                    }
                }
                button{
                    padding: 9px 26px;
                    width: 100%;
                    background: #FF8C38;
                    border: none;
                    color: white;
                    font-weight: 700;
                    font-size: 19px;
                    border-radius: 5px;
                }
            }
        }
    }

`