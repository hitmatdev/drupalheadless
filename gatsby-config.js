/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Dunder Mifflin Pharma`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    },
    
    resolve: `gatsby-source-drupal`,
    options: {
      baseUrl: `https://dev-dhcms.pantheonsite.io/`,
      preview : true,
      apiBase: `jsonapi`, // optional, defaults to `jsonapi`
      languageConfig: {
        defaultLanguage: `en`,
        enabledLanguages: [`en`, `fr`,`hi`],
        translatableEntities: [`node--headless_page`,`node--inner_page`, `node--products`,`node--people`],
          nonTranslatableEntities: [`file--file`],
        
      },
    },

  
    
  }]
};

//setting default language
