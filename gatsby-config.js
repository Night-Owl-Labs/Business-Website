/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Bright Ideas, Built Beautifully`,
    description: `Early Bird Labs is a creative software studio focused on design, development, and education. We craft thoughtful digital products, teach what we learn, and help teams ship smarter, faster, and with joy.`,
    author: `@`,
    siteUrl: `https://bizwebsite.netlify.app`,
  },
  plugins: [
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
        name: `Early Bird Labs`,
        short_name: `Early Bird Labs`,
        start_url: `/`,
        background_color: `#8ED8F8`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        //theme_color: `#FFFFFF`, //White
        //theme_color: `#FCDB3A`, //Yellow
        //theme_color: `#0E2F00`, //Dark Green
        //theme_color: `#005E1F`, //Lighter Green
        theme_color: `#8ED8F8`, //Dark Green
        // display: `minimal-ui`,
        icon: `src/images/home-icon.png`, // This path is relative to the root of the site.
        display: `standalone`,
        include_favicon: false,
      },
    },
  ],
}
