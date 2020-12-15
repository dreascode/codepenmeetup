module.exports = {
  siteMetadata: {
    title: `Twin Cities CodePen Meetup`,
    description: `Create, inspire and share at our online monthly meetup`,
    author: `@andreaedstrom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#EEEAE6`,
        theme_color: `#0C81E4`,
        display: `minimal-ui`,
        icon: `src/images/codepen-meetup-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `IBM Plex Serif`,
              variants: [`400`, `400i`, `700`, `700i`,]
            },
            {
              family: `IBM Plex Sans`,
              variants: [`700`]
            },
          ],
        },
      },
    }
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `IBM Plex Serif`,
    //         varients: [`400`,`400i`,`700`,`700i`]
    //       },
    //       {
    //         family: `IBM Plex Sans`,
    //         varients: [`700`,`700i`]
    //       },
    //     ],
    //   }
    // }
  ],
}
