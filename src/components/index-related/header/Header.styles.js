import styled from "styled-components";
import HeaderBackground from '../../../images/header-background.png';

export const HeaderContainer = styled.header`
    min-height:max(100vh, 600px);
    background-image: url('${HeaderBackground}');
    background-size:cover;
    background-position: center center;
    background-attachment: fixed;
    display:grid;
    align-items:center;
    position:relative;
`;

export const ContentContainer = styled.div`
    text-align:start;
    padding:2rem 3.5rem 2rem 2rem;
    grid-area: 1 / 1 / 2 / 2;
    margin-bottom:4rem;
    h1{
        font-family: 'Exo 2', sans-serif;
        font-weight:800;
        font-size:clamp(1.9rem, 8vw, 4rem);
        text-shadow: 8px 7px 12px var(--color-secondary);
    }
    h2{
        font-size:clamp(1.3rem, 5vw, 2rem);
        font-weight:600;
        margin-top:.6rem;
        text-shadow: 3px 4px 7px var(--color-main);
    }
    @media(min-width:320px){
        padding:2rem 3.5rem;
        text-align:center;
    }
`;