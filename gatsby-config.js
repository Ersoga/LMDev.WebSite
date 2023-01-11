require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `LMDev`,
    siteTitleAlt: `LMDev - Laser manufacturing`,
    siteHeadline: `LMDev - Laser manufacturing @LM`,
    siteUrl: `https://www.lmdev.net.cn`,
    siteDescription: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
    siteImage: `/banner.jpg`,
    author: `lm`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve:`gatsby-plugin-gatsby-cloud`,
      options:{
        
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/content/sections`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/blog`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-mdx',
    true && {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    {
      resolve:`gatsby-plugin-theme-ui`,
      options:{
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Laser Manufacturing`,
        short_name: `LMDev`,
        description: `Laser manufacturing`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/lm32x64.png`,
            sizes: `64x32`,
            type: `image/png`,
          },
          {
            src: `/lm22x33.png`,
            sizes: `33x22`,
            type: `image/png`,
          },
        ],
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    }
  ].filter(Boolean),
}
