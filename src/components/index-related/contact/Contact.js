import React, { useState } from "react";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import CheckIcon from '../../../images/check.svg';
import PhoneIcon from '../../../images/phone.svg';
import ClockIcon from '../../../images/clock.svg';
import EmailIcon from '../../../images/email.svg';
import SendIcon from '../../../images/send.svg';
import { ContactContainer, InformationCard, Form } from "./Contact.styles";
import FormInput from "../../utils/FormInput";
import SubmitButton from "../../utils/buttons/SubmitButton";

const sendMessage = async data => {
    try{
        await fetch(process.env.GATSBY_CONTACT_ENDPOINT, {
            method: 'post',
            body: data,
            mode: 'no-cors'
        });
    }
    catch(error){
        console.error(error);
    }
}

const Contact = () => {

    const { phoneNum, email } = useSiteMetadata();
    const [loading, setLoading] = useState(false);
    const [showErrors, setShowErrors] = useState(false);
    const [success, setSuccess] = useState(false);

    const inputs = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'Your name',
            errorMessage: 'This field is required.',
            required: true,
            maxLength: '50',
        },
        {
            name: 'phone-number',
            type: 'tel',
            placeholder: 'Your phone number',
            errorMessage: 'Please enter valid phone number.',
            pattern: '^[0-9]*$',
            required: true,
            maxLength: '9',
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'Your email',
            errorMessage: 'Please enter valid email address.',
            required: true,
            maxLength: '50',
        },
        {
            name: 'title',
            type: 'text',
            placeholder: 'Message title',
            errorMessage: 'This field is required.',
            required: true,
            maxLength: '50',
        },
        {
            name: 'message',
            placeholder: 'Enter your message',
            errorMessage: 'This field is required.',
            required: true,
            maxLength: '1000',
            as: 'textarea',
        }
    ];

    const handleSubmit = e => {
        e.preventDefault();
        if(loading || success) return;
        setLoading(true);
        const data = new FormData(e.target);
        sendMessage(data).then(() => setSuccess(true)).finally(() => setLoading(false));
    }

    const handleButtonClick = e => {
        setShowErrors(true);
    }
    
    return(
        <ContactContainer id='contact'>
            <address>
                <InformationCard>
                    <img src={PhoneIcon} alt='Phone number' />
                    <p>{phoneNum}</p>
                </InformationCard>
                <InformationCard>
                    <img src={EmailIcon} alt='Email' />
                    <p>{email}</p>
                </InformationCard>
            </address>
            <InformationCard>
                <img src={ClockIcon} alt='Short lead times' />
                <p>Short lead time</p>
            </InformationCard>
            <InformationCard>
                <img src={CheckIcon} alt='Possibility of cooperation' />
                <p>Possibility of cooperation</p>
            </InformationCard>
            <Form onInvalid={e => e.preventDefault()} onSubmit={handleSubmit}>
                {inputs.map(input => {
                    const { name } = input;
                    return(
                        <FormInput showError={showErrors} key={name} {...input} />
                    )
                })}
                <SubmitButton onClick={handleButtonClick} disabled={loading} success={success} type='submit'>
                    Send Message
                    <img src={SendIcon} alt='' />
                </SubmitButton>
            </Form>
        </ContactContainer>
    )
}

export default Contact;