const path = require('path')





exports.createPages = async ({ graphql, actions }) => {
  
  

  const lang = { English : "en", French : "fr", Hindi : "hi" }

  
  const { createPage } = actions
  const PeopleTemplate = path.resolve('src/templates/people.js')
  const ProductTemplate = path.resolve('src/templates/product.js')

  const AboutUsTemplate = path.resolve('src/templates/about-us.js')
  const IndexTemplate = path.resolve('src/templates/index.js')
  const PressReleaseTemplate = path.resolve('src/templates/press-releases.js')

  
  
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
        id
      }
    }
    allNodeProducts {
      nodes {
        langcode
        field_product_slug
        id
      }
    }
    allNodeInnerPage {
      nodes {
        langcode
        field_inner_slug
      }
    }
    allNodePressRelease {
      nodes {
        langcode
        field_press_slug
        id
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
      context: {langcode: node.langcode, id: node.id },




    })
  
  })

  queryResult.data.allNodePeople.nodes.forEach((node) => 
  { 
  createPage({
      path: "/"+node.langcode+"/"+node.field_people_slug,
      component: PeopleTemplate,
      context: {langcode: node.langcode , id : node.id},

    })
  
  })

  queryResult.data.allNodeHeadlessPage.nodes.forEach((node) => 
  { 
  createPage({
      path: "/"+node.langcode+"/"+node.field_slug,
      component: IndexTemplate,
      context: {langcode: node.langcode , id : node.id},

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
  queryResult.data.allNodePressRelease.nodes.forEach((node) => 
  { 
  createPage({
      path: "/"+node.langcode+"/"+node.field_press_slug,
      component: PressReleaseTemplate,
      context: { langcode: node.langcode , id : node.id},

    })
  
  })


}



