import React from "react";
import FacebookIcon from '../../../images/facebook.svg';
import LinkedinIcon from '../../../images/linkedin.svg';
import GithubIcon from '../../../images/github.svg';
import useSiteMetadata from '../../../hooks/useSiteMetadata';
import { LinksContainer } from "./SideSocialLinks.styles";

const SideSocialLinks = () => {

    const { facebookURL, githubURL, linkedinURL } = useSiteMetadata();

    return(
        <LinksContainer>
            <p>Find me on</p>
            <a rel='noopener noreferrer' target='_blank' href={githubURL}>
                <img src={GithubIcon} alt='Github' />
            </a>
            <a rel='noopener noreferrer' target='_blank' href={linkedinURL}>
                <img src={LinkedinIcon} alt='Linkedin' />
            </a>
            <a rel='noopener noreferrer' target='_blank' href={facebookURL}>
                <img src={FacebookIcon} alt='Facebook' />
            </a>
        </LinksContainer>
    )
}

export default SideSocialLinks;