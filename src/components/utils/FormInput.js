import React from "react";
import styled from "styled-components";

const Label = styled.label`
    position:relative;
    textarea{
        resize:none;
        min-height:25rem;
    }
    p{
        position:absolute;
        bottom:-1.1rem;
        font-size:.75rem;
        color:var(--color-red);
        display:none;
    }
    @media(min-width:360px){
        p{
            font-size:.9rem;
            bottom:-1.3rem;
        }
    }
`;

const Input = styled.input`
    width:100%;
    font-size:1rem;
    font-weight:400;
    font-family: 'Nunito', sans-serif;
    color:var(--color-white);
    box-shadow: inset 0px 3px 6px #F9A1070F;
    border-radius: 15px;
    border:none;
    background:var(--color-main);
    outline:none;
    padding: .9rem 1.5rem;
    &::placeholder{
        color:var(--color-white-dark);
    }
    ${({showError}) => showError && `
        &:invalid{
            outline:1px solid var(--color-red);
            & ~ p{
                display:block;
            }
        }
    `}
`;

const FormInput = (props) => {

    const { showError, errorMessage, ...inputProps } = props;

    return(
        <Label>
            <Input {...inputProps} showError={showError} />
            <p role='alert'>{errorMessage}</p>
        </Label>
    )

}

export default FormInput;