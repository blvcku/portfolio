import React from "react";
import { GatsbyImage } from 'gatsby-plugin-image';
import GithubIcon from '../../../images/github-white.svg';
import LinkIcon from '../../../images/link-white.svg';
import { ProjectDetailsContainer, ContentContainer, ImagesContainer, LinksContainer } from "./ProjectDetails.styles";

const ProjectDetails = ({presentationImages, title, content, siteURL, githubURL}) => {
    return(
        <ProjectDetailsContainer>
            <ImagesContainer>
                {presentationImages.map((image, index) => (
                    <div>
                        <GatsbyImage key={index} image={image} alt={title} />
                    </div>
                ))}
            </ImagesContainer>
            <span></span>
            <ContentContainer>
                <div dangerouslySetInnerHTML={{__html: content}} />
                <LinksContainer>
                    {githubURL && (
                        <a rel='noopener noreferrer' target='_blank' href={githubURL}>
                            <img src={GithubIcon} alt='Project github' />
                        </a>
                    )}
                    {siteURL && (
                        <a rel='noopener noreferrer' target='_blank' href={siteURL}>
                            <img src={LinkIcon} alt='Project site' />
                        </a>
                    )}
                </LinksContainer>
            </ContentContainer>
        </ProjectDetailsContainer>
    )
}

export default ProjectDetails;