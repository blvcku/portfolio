import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

const CustomLink = styled(Link)`
    background:var(--color-grey);
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 15px;
    padding: .7rem;
    transition:transform .2s ease;
    & > div{
        display:flex;
        justify-content:center;
        align-items:center;
        width:1.9rem;
        aspect-ratio:1/1;
        position:relative;
        &::before, &::after{
            position:absolute;
            content:'';
            background:var(--color-secondary);
            width:100%;
            height:2px;
        }
        &::before{
            transform:rotate(45deg);
        }
        &::after{
            transform:rotate(-45deg);
        }
    }
    &:active{
        transform:scale(0.96);
    }
`;

const CloseButton = (props) => {
    return(
        <CustomLink {...props}>
            <div></div>
        </CustomLink>
    )
}

export default CloseButton;