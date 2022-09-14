import styled from "styled-components";

export const FooterContainer = styled.footer`
    background:var(--color-secondary);
    box-shadow: 0px 11px 6px #0000002E;
    padding-bottom:1.5rem;
    padding-top:2rem;
    padding-inline:2rem;

    & > p {
        font-size:1rem;
        grid-column: span 3;
        text-align:center;
        margin-top:1.5rem;
    }

    span{
        border-top:1px solid var(--color-white);
        display:block;
        margin-bottom:2rem;
    }

    h2, h3{
        font-family: 'Exo 2', sans-serif;
        font-weight:700;
        font-size:clamp(1.5rem, 8vw, 2.5rem);
        text-transform:uppercase;
        margin-bottom:1rem;
    }

    h4{
        font-weight:400;
        font-size:clamp(1.2rem, 7vw, 1.7rem);
        margin-bottom:1rem;
    }

    @media(min-width:950px){
        display:grid;
        grid-template-columns:1fr auto 1fr;
        padding-inline:0;
        span{
            border-right:1px solid var(--color-white);
        }
        & > div, & > address{
            margin: 1.5rem 1rem 0 3rem;
        }
        & > p{
            margin-top:0;
        }
        h2,h3{
            margin-bottom:2rem;
        }
    }
    @media(min-width:1350px){
        & > div, & > address{
            margin-inline:8.5rem;
        }
    }
`;

export const Contact = styled.address`
    font-style:normal;
    a{
        word-break:break-all;
        display:flex;
        align-items:center;
        font-size:1.2rem;
        color:var(--color-white);
        gap:.9rem;
        margin-bottom:1rem;
        width:fit-content;
        font-weight:400;
        & > img{
            width:2.1rem;
            height:2.1rem;
        }
        &:nth-of-type(4){
            font-weight:700;
            @media(min-width:950px){
                margin-top:2rem;
            }
        }
        &:focus{
            outline-offset:4px;
        }
    }
`;

export const Informations = styled.div`
    p{
        font-size:1rem;
        max-width:50ch;
    }
`;