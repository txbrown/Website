module.exports = {
  siteMetadata: {
    title: `Codenakama`,
    author: `Ricardo Abreu`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-catch-links`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-emoji`
        ]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `n3ul8nyrm3nv`,
        accessToken: `b0793bd319079d0ac727403bdb98d2448b9b2852e730b53a5928ab6cc8781444`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-119584888-3'
      }
    }
  ]
};
