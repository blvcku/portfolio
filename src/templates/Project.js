import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { getSrc, getImage } from 'gatsby-plugin-image';
import useSiteMetadata from "../hooks/useSiteMetadata";
import CustomHelmet from "../components/CustomHelmet";
import Footer from "../components/footer/Footer";
import Header from "../components/project-related/header/Header";
import ProjectDetails from "../components/project-related/project-details/ProjectDetails";

const Project = ({data}) => {

    const { html: content } = data.markdownRemark;
    const { title, stack, siteURL: projectSiteURL, githubURL, slug, preview } = data.markdownRemark.frontmatter;
    const { edges: images } = data.allFile;
    const { siteURL } = useSiteMetadata();
    const previewImageSrc = getSrc(preview);
    const [presentationImages, setPresentationImages] = useState([]);

    //this code gets images for project presentation
    useEffect(() => {
        const imagesArray = images.map(({node}) => (getImage(node)));
        setPresentationImages(imagesArray);
    }, [images]);

    return(
        <>
            <CustomHelmet type='article' img={previewImageSrc} title={title} siteURL={`${siteURL}/projects/${slug}`} />
            <Header img={previewImageSrc} stack={stack} title={title} />
            <main>
                <ProjectDetails siteURL={projectSiteURL} githubURL={githubURL} presentationImages={presentationImages} title={title} content={content} />
            </main>
            <Footer />
        </>
    )
}

export default Project;

export const query = graphql`
    query Project($slug: String, $presentation: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                githubURL
                siteURL
                stack
                title
                slug
                preview {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: DOMINANT_COLOR
                            layout: FULL_WIDTH
                        )
                    }
                }
            }
        }
        allFile(filter: {relativeDirectory: {eq: $presentation}}) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: DOMINANT_COLOR
                            width: 700
                            quality:100
                        )
                    }
                }
            }
        }
    }  
`;