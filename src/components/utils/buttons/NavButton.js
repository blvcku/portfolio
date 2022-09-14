import React from "react";
import styled from 'styled-components';

const Button = styled.button`
    position:relative;
    font-family: 'Exo 2', sans-serif;
    font-weight:500;
    text-transform:uppercase;
    font-size:1.8rem;
    padding-inline:2.5rem;
    border:none;
    background:none;
    transition:color .3s ease;
    ${({active}) => active && 'color:var(--color-secondary);'}

    &::before, &::after{
        content:'';
        position:absolute;
        bottom:0;
        height:2px;
        background:var(--color-secondary);
        width:0;
        transform:translateY(2px);
        ${({active}) => active && 'width:2.5rem;'}
        transition: width .3s ease;
    }
    &::before{
        right:50%;
    }
    &::after{
        left:50%;
    }
    &:focus{
        outline-offset:7px;
    }
`;

const NavButton = (props) => {

    const { children, ...buttonProps } = props;

    return(
        <Button {...buttonProps}>
            {children}
        </Button>
    )
}

export default NavButton;