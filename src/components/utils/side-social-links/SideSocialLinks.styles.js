import styled from "styled-components";

export const LinksContainer = styled.div`
    align-self:center;
    display:flex;
    align-items:center;
    gap:.5rem;
    position:absolute;
    right:0;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    margin-right:1rem;
    p{
        color:var(--color-secondary);
        font-weight:400;
        font-size:2rem;
        white-space:nowrap;
    }
    img{
        width:1.8rem;
        height:1.8rem;
        display:block;
        transform:rotate(90deg);
    }
    &::before, &::after{
        content:'';
        width:2px;
        background:var(--color-secondary);
    }
    &::before{
        margin-bottom:.5rem;
        height:8rem;
    }
    &::after{
        margin-top:.5rem;
        height:2.7rem;
    }
    @media(min-width:1100px){
        margin-right:3rem;
    }
    @media(min-height:650px){
        margin-top:3rem;
    }
`;