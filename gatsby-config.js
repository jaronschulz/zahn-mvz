module.exports = {
  siteMetadata: {
    title: `Zahn-MVZ`,
    siteUrl: `https://www.zahn-med-mvz.de`,
    description: `Zentrum für die zahnärztliche und kieferchirurgische Behandlung von Menschen mit Behinderung`,
  },
  plugins: [
    `gatsby-plugin-playground`,
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
