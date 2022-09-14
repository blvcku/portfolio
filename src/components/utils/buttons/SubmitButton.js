import React from "react";
import styled from 'styled-components';

const Button = styled.button`
    position:relative;
    background:var(--color-main);
    font-family: 'Nunito', sans-serif;
    color:var(--color-white);
    border:none;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 15px;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1rem;
    font-size:1rem;
    font-weight:600;
    padding: .8rem;
    transition:transform .2s ease;
    img{
        width:1.4rem;
        height:auto;
    }
    &:active{
        transform:scale(0.96);
    }
    svg{
        display:none;
        position:absolute;
        width:2rem;
        height:auto;
        color:var(--color-secondary);
    }
    &:disabled{
        svg{
            display:block;
        }
        &::before{
            content:'';
            position:absolute;
            width:100%;
            height:100%;
            background:var(--color-main);
            border-radius: 15px;
        }
    }
`;

const SubmitButton = (props) => {

    const { children, success, ...buttonProps } = props;

    return(
        <Button {...buttonProps}>
            {success ? 'Thank you for sending message!' : (
                <>
                    {children}
                    <svg viewBox="0 0 50 50" >
                        <path fill='currentColor' d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                            <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite" />
                        </path>
                    </svg>
                </>
            )}
        </Button>
    )
}

export default SubmitButton;