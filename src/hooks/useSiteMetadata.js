import { useStaticQuery, graphql } from "gatsby"
const useSiteMetadata = () => {
    const { site } = useStaticQuery(graphql`
      	query SiteMetaData {
        	site {
          		siteMetadata {
					title
					description
					keywords
					copyright
					siteURL
					facebookURL
					githubURL
					linkedinURL
					email
					phoneNum
         		}
        	}
      	}
    `)

    return site.siteMetadata;
}

export default useSiteMetadata;