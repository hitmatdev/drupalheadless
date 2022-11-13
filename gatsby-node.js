const path = require('path')




exports.createPages = async ({ graphql, actions }) => {
  
  

  const lang = { English : "en", French : "fr", Hindi : "hi" }

  
  const { createPage } = actions
  const PeopleTemplate = path.resolve('src/templates/people.js')
  const ProductTemplate = path.resolve('src/templates/product.js')

  const AboutUsTemplate = path.resolve('src/templates/about-us.js')
  const IndexTemplate = path.resolve('src/templates/index.js')

  
  
  const queryResult = await graphql(`
   query{
    allNodeHeadlessPage {
      nodes {
        field_slug
        langcode
      }
    }
    allNodePeople {
      nodes {
        field_people_slug
        langcode
      }
    }
    allNodeProducts {
      nodes {
        langcode
        field_product_slug
      }
    }
    allNodeInnerPage {
      nodes {
        langcode
        field_inner_slug
      }
    }
  }
  `)

  if (queryResult.errors) {
    throw queryResult.errors
  }

  const { createRedirect } = actions
  createRedirect({ fromPath: '/', toPath: '/en/home/', isPermanent: true })

  
  queryResult.data.allNodeProducts.nodes.forEach((node) => 
  { 
  createPage({
      path: "/"+node.langcode+"/"+node.field_product_slug,
      component: ProductTemplate,
      context: {langcode: node.langcode },

    })
  
  })

  queryResult.data.allNodePeople.nodes.forEach((node) => 
  { 
  createPage({
      path: "/"+node.langcode+"/"+node.field_people_slug,
      component: PeopleTemplate,
      context: {langcode: node.langcode },

    })
  
  })

  queryResult.data.allNodeHeadlessPage.nodes.forEach((node) => 
  { 
  createPage({
      path: "/"+node.langcode+"/"+node.field_slug,
      component: IndexTemplate,
      context: {langcode: node.langcode },

    })
  
  })

  queryResult.data.allNodeInnerPage.nodes.forEach((node) => 
  { 
  createPage({
      path: "/"+node.langcode+"/"+node.field_inner_slug,
      component: AboutUsTemplate,
      context: { langcode: node.langcode },

    })
  
  })


}




