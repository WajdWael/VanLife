import COLORS from "../styles/colors"
import styled from "styled-components"


const Footer = () => {
    return (
        <FooterStyle>&#169; 2023 #VANLIFE</FooterStyle>
    )
}



const FooterStyle = styled.footer`
    /* position: fixed; */
    /* bottom: 0; */
    width: 100%;
    height: 100px;

    font-weight: 800;
    font-size: 1rem;

    display: flex;
    justify-content: center;
    align-items: center; 

    background-color: ${COLORS.mainBG_gray};
    color: ${COLORS.light_gray};
`


export default Footer