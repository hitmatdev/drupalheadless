const path = require('path')




exports.createPages = async ({ graphql, actions }) => {
  
  

  const lang = { English : "en", French : "fr", Hindi : "hi" }

  
  const { createPage } = actions
  const BlogTemplate = path.resolve('src/templates/blog.js')
  const ProductTemplate = path.resolve('src/templates/product.js')

  const AboutUsTemplate = path.resolve('src/templates/about-us.js')
  const IndexTemplate = path.resolve('src/templates/index.js')

  
  
  const queryResult = await graphql(`
   query{
      allNodeProducts {
        edges {
          node {
            id
            title
            field_cta
            field_tags_hcm
          }
        }
      }
    } 
  `)

  if (queryResult.errors) {
    throw queryResult.errors
  }

  
  queryResult.data.allNodeProducts.edges.forEach((node) => { 
    

    
    createPage({
      path: "/product/"+node.node.title,
      component: ProductTemplate,
      context: { story:node},

    })

    
  })

  actions.createPage({ path: '/', component: IndexTemplate, context: { langcode: lang.English}})
  actions.createPage({ path: '/fr/', component: IndexTemplate, context: { langcode: lang.French}})
  actions.createPage({ path: '/hi/', component: IndexTemplate, context: { langcode: lang.Hindi}})


  actions.createPage({ path: '/about-us/', component: AboutUsTemplate, context: { langcode: lang.English}})
  actions.createPage({ path: '/fr/about-us/', component: AboutUsTemplate, context: { langcode: lang.French}})
  actions.createPage({ path: '/hi/about-us/', component: AboutUsTemplate, context: { langcode: lang.Hindi}})



}


