import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';
import Img from '../images/site-preview.png';

const CustomHelmet = (props) => {

    const { title: baseTitle, description: baseDescription, keywords, siteURL: baseSiteURL } = useSiteMetadata();

    const {
        title = baseTitle,
        description = baseDescription,
        img = Img,
        siteURL = baseSiteURL,
        type = 'website'
    } = props;

    return(
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta charset='UTF-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta name='theme-color' content='#373B40' />
            <meta name='color-scheme' content='dark' />
            <meta property='og:title' content={title} />
            <meta property='og:type' content={type} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={img} />
            <meta property='og:locale' content='en_US' />
            <meta property='og:url' content={siteURL} />
            <link rel='canonical' href={siteURL} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
        </Helmet>
    )
}

export default CustomHelmet;