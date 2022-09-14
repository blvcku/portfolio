import { useStaticQuery, graphql } from "gatsby"
const useProjectsData = () => {
    const { allMarkdownRemark } = useStaticQuery(graphql`
		query ProjectsList {
			allMarkdownRemark {
				nodes {
					frontmatter {
						title
						category
						slug
						thumb {
							childImageSharp {
								gatsbyImageData(
									placeholder: DOMINANT_COLOR
								)
							}
						}
					}
				}
			}
		}
    `)

    return allMarkdownRemark.nodes;
}

export default useProjectsData;