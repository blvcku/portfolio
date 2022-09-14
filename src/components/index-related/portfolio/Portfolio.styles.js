import styled from "styled-components";

export const PortfolioContainer = styled.section`
    --dash-length: 30px;
    --dash-size:3px;
    --spacing: 29px;
    --padding-inline: 2rem;
    margin-top:5rem;
    padding-top:5rem;
    padding-bottom:5rem;
    position:relative;
    max-width:1750px;
    padding-inline:var(--padding-inline);
    margin-inline:auto;

    &::before, &::after{
        content:'';
        position:absolute;
        width:calc(100% - 2 * var(--padding-inline));
        height:var(--dash-size);
        left:50%;
        transform:translateX(-50%);
        background-image: linear-gradient(
            to right,
            var(--color-secondary) var(--dash-length),
            transparent var(--spacing)
        );
        background-size:calc(var(--dash-length) + var(--spacing)) 100%;
    }
    &::before{
        top:0;
    }
    &::after{
        bottom:0;
    }
`;

export const HeadContainer = styled.div`
    & > h2{
        font-family: 'Exo 2', sans-serif;
        font-weight:800;
        text-transform:uppercase;
        font-size:clamp(1.9rem, 8vw, 3rem);
    }
    & > nav{
        margin-top:2rem;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
        gap:1rem;
    }
    @media(min-width:1050px){
        display:grid;
        grid-template-columns: 1fr repeat(3, auto);
        align-items:center;
        gap:1rem;
        & > h2{
            grid-column:auto;
        }
        & > nav{
            display:contents;
        }
    }
`;

export const ProjectsContainer = styled.ul`
    --margin:2rem;
    display:grid;
    grid-template-columns:1fr;
    margin-top:var(--margin);
    column-gap:5.5rem;
    row-gap:4.5rem;
    justify-items:center;
    @media(min-width:600px){
        grid-template-columns:repeat(2, 1fr);
        --margin:5rem;
    }
    @media(min-width:1140px){
        grid-template-columns:repeat(4, 1fr);
        grid-template-rows:repeat(2, 1fr);
    }
    &:empty{
        min-height:15rem;
        position:relative;
        &::before{
            content:'No projects in this category!';
            position:absolute;
            font-size:1.5rem;
            top:calc(50% - var(--margin));
            transform:translateY(50%);
            color:var(--color-white-dark);
            width:100%;
            text-align:center;
        }
        @media(min-width:450px){
            min-height:20rem;
        }
    }
`;

export const ProjectContainer = styled.li`
    --x-offset:1.2rem;
    --y-offset:-1.4rem;
    --dash-size:5px;
    --dash-length:30px;
    --spacing:15px;
    aspect-ratio:1/1;
    position:relative;
    width:100%;
    max-width:355px;
    margin-right:var(--x-offset);
    margin-top:calc(-1 * var(--y-offset));
    opacity:0;
    transform:translateY(-10%);
    animation: project-appear .8s ease forwards;
    & > a{
        color:var(--color-white);
        text-decoration:none;
        background: url('${({thumb}) => thumb}');
        background-size:cover;
        background-position:center center;
        overflow:hidden;
        text-align:center;
        border-radius:15px;
        display:grid;
        height:100%;
        box-shadow: 0px 6px 6px #00000070;
        transition:transform .5s ease;
        &::before{
            content:'';
            grid-area: 1 / 1 / 2 / 2;
            display:block;
            height:100%;
            background:rgba(164, 165, 166, 0.91);
        }
        & > h3{
            grid-area: 1 / 1 / 2 / 2;
            text-transform:uppercase;
            text-shadow:0px 3px 6px #0000008A;
            font-family: 'Exo 2', sans-serif;
            font-weight:800;
            font-size:clamp(1.6rem, 2vw, 2.2rem);
            align-self:center;
            justify-self:center;
            word-break:break-word;
            padding-inline:1rem;
        }
    }
    &::before{
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        z-index:-1;
        top:0;
        left:0;
        transition:opacity .3s ease;
        transform:translateX(var(--x-offset)) translateY(var(--y-offset));
        filter:drop-shadow(0px 6px 6px #00000070);
        background-image:
            repeating-linear-gradient(0deg, var(--color-secondary),
                var(--color-secondary) var(--dash-length),
                transparent var(--dash-length), transparent calc(var(--dash-length) + var(--spacing)),
                var(--color-secondary) calc(var(--dash-length) + var(--spacing))), 
            repeating-linear-gradient(90deg, 
                var(--color-secondary), 
                var(--color-secondary) var(--dash-length), 
                transparent var(--dash-length), 
                transparent calc(var(--dash-length) + var(--spacing)), 
                var(--color-secondary) calc(var(--dash-length) + var(--spacing))), 
            repeating-linear-gradient(180deg,
                var(--color-secondary),
                var(--color-secondary) var(--dash-length),
                transparent var(--dash-length),
                transparent calc(var(--dash-length) + var(--spacing)),
                var(--color-secondary) calc(var(--dash-length) + var(--spacing))),
            repeating-linear-gradient(270deg,
                var(--color-secondary),
                var(--color-secondary) var(--dash-length),
                transparent var(--dash-length), 
                transparent calc(var(--dash-length) + var(--spacing)), 
                var(--color-secondary) calc(var(--dash-length) + var(--spacing)));
        background-size: var(--dash-size) 100%, 100% var(--dash-size), var(--dash-size) 100% , 100% var(--dash-size);
        background-position: 0 0, 0 0, 100% 0, 0 100%;
        background-repeat: no-repeat;
    }

    &:hover{
        & > a{
            transform:translateX(var(--x-offset)) translateY(var(--y-offset));
        }
        &::before{
            opacity:0;
            transition:opacity .3s ease .2s;
        }
    }

    @keyframes project-appear{
        to{transform:translateY(0); opacity:1;}
    }
`;