import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --color-main:#373B40;
        --color-main-light: #565759;
        --color-secondary:#F9A107;
        --color-white:#F4F6F7;
        --color-white-dark:#d2d3d4;
        --color-grey:#565759;
        --color-red:#D64B22;
        font-family: 'Nunito', sans-serif;
        color:var(--color-white);
    }

    *, *::before, *::after{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body{
        background:var(--color-main);
    }

    ul, ol{
        list-style:none;
    }

    button{
        cursor:pointer;
    }
`;

export default GlobalStyle;