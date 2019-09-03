module.exports = {
  siteMetadata: {
    title: `Zahn MVZ`,
    siteUrl: `https://www.zahn-med-mvz.de.org`,
    description: `Zahn- und kieferorthopädisches Versorgungszentrum für Menschen mit Behinderung`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
