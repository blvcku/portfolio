import styled from "styled-components";

export const AboutContainer = styled.section`
`;

export const BannerContainer = styled.section`
    background:var(--color-secondary);
    padding:4.5rem 2rem;
    box-shadow: 0px 11px 6px #0000002E;
    & > ul{
        max-width:950px;
        width:100%;
        margin-inline:auto;
        text-align:center;
        display:grid;
        grid-template-columns:1fr;
        grid-auto-rows:1fr;
        justify-items:center;
        gap:3rem;
        @media(min-width:700px){
            grid-template-columns:repeat(3, 1fr);
            gap:2rem;
        }
        @media(min-width:900px){
            gap:7rem;
        }
    }
`;

export const BannerCardContainer = styled.li`
    background-image: url("data:image/svg+xml,%3csvg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%' height='100%' fill='none' rx='15' ry='15' stroke='%23565759' stroke-width='8px' stroke-dasharray='25%2c22' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 15px;
    padding-top:3.5rem;
    padding-bottom:4rem;
    position:relative;
    max-width:250px;
    width:100%;
    & > h2{
        color:var(--color-grey);
        font-weight:700;
        font-family: 'Exo 2', sans-serif;
        max-width:8ch;
        margin-inline:auto;
        & > strong{
            font-weight:800;
            font-size:4rem;
        }
    }
    &::before{
        content:'';
        position:absolute;
        border:4px solid var(--color-grey);
        border-radius: 4px;
        bottom:0;
        right:13%;
        transform:translateY(50%);
        background-color:var(--color-secondary);
        background-image:url(${({icon}) => icon});
        background-size:70%;
        background-repeat:no-repeat;
        background-position:center center;
        width:3.1rem;
        height:3.1rem;
    }
`;

export const AboutContent = styled.section`
    margin-top:5rem;
    padding-inline:2rem;
    max-width:1750px;
    margin-inline:auto;
    & > h2{
        font-family: 'Exo 2', sans-serif;
        font-weight:800;
        text-transform:uppercase;
        font-size:clamp(1.9rem, 8vw, 3rem);
    }
    & > p{
        font-weight:400;
        font-size:1.5rem;
        margin-top:2rem;
        max-width:100ch;
    }
`;

export const TechnologiesContainer = styled.section`
    --dash-length:30px;
    --dash-size:3px;
    margin-top:5rem;
    padding-inline:2rem;
    max-width:1750px;
    margin-inline:auto;
    & > h2{
        font-family: 'Exo 2', sans-serif;
        font-weight:800;
        text-transform:uppercase;
        font-size:clamp(1.9rem, 8vw, 3rem);
    }
    & > ul{
        display:grid;
        row-gap:.5rem;
        margin-top:2rem;
        max-width:1300px;
        & > li{
            font-weight:400;
            font-size:1.5rem;
            display:flex;
            align-items:center;
            gap:1rem;
            &::before{
                content:'';
                background:var(--color-secondary);
                width:var(--dash-length);
                height:var(--dash-size);
            }
        }
    }
    @media(min-width:500px){
        & > ul{
            grid-template-columns:repeat(2, 1fr);
        }
    }
`;