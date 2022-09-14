import styled from "styled-components";

export const ContactContainer = styled.section`
    margin-top:5rem;
    margin-bottom:5rem;
    margin-inline:auto;
    padding-inline:2rem;
    max-width:1750px;
    display:grid;
    grid-template-columns:1fr;
    gap:1.5rem;
    & > address{
        display:contents;
    }
    @media(min-width:480px){
        grid-template-columns:repeat(2, 1fr);
    }
    @media(min-width:950px){
        grid-template-columns:1fr 3.2fr;
        grid-auto-rows:1fr;
        row-gap:1.5rem;
        column-gap:3rem;
    }
    @media(min-width:1250px){
        column-gap:6.2rem;
        margin-top:7rem;
        margin-bottom:7rem;
    }
`;

export const InformationCard = styled.div`
    background:var(--color-grey);
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 15px;
    text-align:center;
    padding-inline:1rem;
    display:grid;
    justify-items:center;
    align-content:center;
    gap:.6rem;
    min-height:175px;
    & > img{
        width:2.3rem;
        height:auto;
    } 
    & > p{
        font-style:normal;
        font-weight:600;
        word-break:break-word;
        font-size:1rem;
    }

    @media(min-width:950px){
        min-height:auto;
        grid-column: 1;
    }
`;

export const Form = styled.form`
    background:var(--color-grey);
    box-shadow: 0px 3px 6px #00000042;
    border-radius: 20px;
    display:grid;
    padding:1rem;
    row-gap:1.6rem;
    margin-top:1rem;
    & > label:nth-child(5){
        margin-top:1.2rem;
    }
    & > button{
        max-width:320px;
        width:100%;
        justify-self:center;
    }
    @media(min-width:310px){
        padding:2rem;
    }
    @media(min-width:480px){
        grid-column:span 2;
    }
    @media(min-width:700px){
        column-gap:4.4rem;
        row-gap:2.2rem;
        padding:3.5rem 3rem;
        grid-template-columns:repeat(2, 1fr);
        & > label:nth-child(5), & > button{
            grid-column:span 2;
            order:2;
        }
        & > label:nth-child(3){
            order:2;
        }
    }
    @media(min-width:950px){
        margin-top:0;
        grid-column: 2;
        grid-row: 1/5;
    }
`;