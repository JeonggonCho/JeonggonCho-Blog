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
    title: `조정곤 블로그`,
    description: `주니어 개발자로서 지식과 개발 정보를 정리한 블로그 및 포트폴리오입니다.`,
    author: `조정곤`,
    siteUrl: 'https://jeonggon.netlify.app',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: 'https://jeonggon.netlify.app',
        stripQueryString: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
            },
          },
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {},
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `조정곤 블로그`,
        short_name: `조정곤 블로그`,
        start_url: '/',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: 'static/favicon.png',
        appName: '조정곤 블로그',
        background: '#ffffff',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          yandex: true,
          windows: true,
        },
      },
    },
  ],
}
