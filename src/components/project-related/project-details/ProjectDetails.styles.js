import styled from "styled-components";

export const ProjectDetailsContainer = styled.section`
    --dash-length: 30px;
    --dash-size:3px;
    --spacing: 29px;
    max-width:1500px;
    width:100%;
    margin-inline:auto;
    padding-inline:2rem;
    margin-top:3rem;
    margin-bottom:3rem;
    display:grid;
    gap:2rem;
    & > span{
        display:none;
        width:var(--dash-size);
        height:100%;
        background-image: linear-gradient(
            to bottom,
            var(--color-secondary) var(--dash-length),
            transparent var(--spacing)
        );
        background-size:100% calc(var(--dash-length) + var(--spacing));
    }
    @media(min-width:950px){
        margin-top:5.5rem;
        margin-bottom:5.5rem;
        grid-template-columns:1fr auto 1fr;
        gap:5rem;
        & > span{
            display:block;
        }
    }
`;

export const ImagesContainer = styled.div`
    box-shadow: 0px 3px 6px #00000042;
    border-radius: 20px;
    background:var(--color-grey);
    padding: 2rem 1rem;
    order:2;
    @media(min-width:950px){
        order:0;
    }
    & > div{
        margin-top:3rem;
        &:first-child{
            margin-top:0;
        }
        @media(min-width:1100px){
            margin-top:5rem;
        }
    }
`;

export const ContentContainer = styled.div`
    box-shadow: 0px 3px 6px #00000042;
    border-radius: 20px;
    background:var(--color-grey);
    padding:2rem 2.5rem;
    height:max-content;
    h1,h2,h3,h4,h5,h6{
        font-weight:600;
        font-size:1.5rem;
        margin-bottom:.3rem;
        margin-top:1.5rem;
        &:first-child{
            margin-top:0;
        }
    }
    p{
        font-size:1.2rem;
        font-weight:400;
        max-width:50ch;
    }
    p + p{
        margin-top:.8rem;
    }
    li{
        --dash-length:15px;
        --dash-size:2px;
        font-size:1.2rem;
        font-weight:400;
        display:flex;
        align-items:center;
        gap:.5rem;
        &::before{
            content:'';
            width:var(--dash-length);
            height:var(--dash-size);
            background:white;
        } 
    }
    strong{
        font-weight:700;
    }
    @media(min-width:950px){
        position:sticky;
        top:2rem;
        max-height:calc(100vh - 4rem);
        overflow:auto;
    }
`;

export const LinksContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:2rem;
    & > a{
        margin-top:2.5rem;
        & > img{
            width:2.5rem;
            height:auto;
            @media(min-width:400px){
                width:4rem;
            }
        }
    }
`;