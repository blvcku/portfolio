const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    const { data: { allMarkdownRemark: { nodes } } } = await graphql(`
        query Projects {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                        presentation
                    }
                }
            }
        }
    `);
    nodes.forEach(({frontmatter: { slug, presentation } }) => {
        actions.createPage({
            path: `/projects/${slug}`,
            component: path.resolve('./src/templates/Project.js'),
            context: { slug: slug, presentation: presentation }
        });
    });
}