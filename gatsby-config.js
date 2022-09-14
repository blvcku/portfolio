module.exports = {
  siteMetadata: {
    title: `Piotr Orzechowski`,
    description: `Piotr Orzechowski portfolio containing his projects and offer on creating and managing websites`,
    keywords: `web development, react, gatsby, next, porfolio, Piotr Orzechowski`,
    copyright: `2022`,
    siteURL: `https://orzechowski.netlify.app`,
    facebookURL: `https://www.facebook.com/piotr.orzechowski.9083/`,
    githubURL: `https://github.com/blvcku`,
    linkedinURL: `https://linkedin.com/`,
    email: `p.orzechowski0405@gmail.com`,
    phoneNum: `+48 695 121 942`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
  ]
};