import React from "react";
import { Link } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import { ProjectContainer } from "./Portfolio.styles";

const Project = ({slug, title, thumb}) => {
    
    const imageSrc = getSrc(thumb);

    return(
        <ProjectContainer thumb={imageSrc}>
            <Link to={`projects/${slug}`}>
                <h3>{title}</h3>
            </Link>
        </ProjectContainer>
    )
}

export default Project;