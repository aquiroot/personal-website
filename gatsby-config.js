module.exports = {
  siteMetadata: {
    title: ``,
    description: `Mu personal website.`,
    author: `@aquiroot`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ion-website`,
        short_name: `ion`,
        start_url: `/`,
        background_color: `#1f2022`,
        theme_color: `#e8304a`,
        display: `minimal-ui`,
        icon: `src/images/user.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
