import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import FacebookIcon from '../../images/facebook-white.svg';
import LinkedinIcon from '../../images/linkedin-white.svg';
import GithubIcon from '../../images/github-white.svg';
import { FooterContainer, Contact, Informations } from './Footer.styles';

const Footer = () => {

    const { copyright, facebookURL, githubURL, linkedinURL } = useSiteMetadata();

    return(
        <FooterContainer>
            <Contact>
                <h2>Find me on:</h2>
                <a rel='noopener noreferrer' target='_blank' href={githubURL}>
                    <img src={GithubIcon} alt='Github' />
                    {githubURL}
                </a>
                <a rel='noopener noreferrer' target='_blank' href={linkedinURL}>
                    <img src={LinkedinIcon} alt='Linkedin' />
                    {linkedinURL}
                </a>
                <a rel='noopener noreferrer' target='_blank' href={facebookURL}>
                    <img src={FacebookIcon} alt='Facebook' />
                    {facebookURL}
                </a>
                <AnchorLink to='/#contact'>
                    Contact me!
                </AnchorLink>
            </Contact>
            <span></span>
            <Informations>
                <h3>Piotr Orzechowski</h3>
                <h4>Front-End Developer</h4>
                <p>Programming enthusiast who writes code for many years, currently focused on creating the best user experience for browser users.</p>
            </Informations>
            <p>Copyright &copy; {copyright} Piotr Orzechowski</p>
        </FooterContainer>
    )
}

export default Footer;