import styled from 'styled-components'


export const HostAboutVan = styled.section`
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

    .card-container{
        background-color: white;
        padding: 1rem;
        max-width: 1120px;
        margin: 2rem auto 2rem;
        border-radius: 5px;
        @media (min-width: 768px) {
            padding: 2rem auto;
            margin: 3rem auto 8rem;
        }

        .col-content{
            display: flex;
            gap: 1rem;
            align-items: center;

            .col1{
                img{
                    width: 123px;
                    border-radius: 5px;
                    @media (min-width: 768px) {
                        width: 180px;
                    }
                }
            }
            .col2{
                display: flex;
                flex-direction: column;
                i{
                    width: 70%;
                    @media (max-width: 768px) {
                        font-size: 15px;
                    }
                }
                h2{
                    @media (min-width:768px) {
                        margin: 1.5rem 0;
                    }
                }
                p{
                    font-weight: 600;
                    span{
                        font-weight: 300;
                    }
                }
            }
        }

        nav{
            display: flex;
            justify-content: start;
            align-items: center;
            margin: 2rem 0 0 0;
            gap: 1rem;

            a{
                font-size: 19px;
                color: #4d4d4d;
                width: auto;
            }
        }
    }
`