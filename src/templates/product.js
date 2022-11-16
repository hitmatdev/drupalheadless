import React from "react"

import HomeLayout from "../components/layouts/HomeLayout"
import {getURLPath} from '../utils/linkUtils';
import { Link, useStaticQuery, graphql } from 'gatsby'
import {siteConfig}  from "../utils/config";



const Products = ({ data, pageContext }) => {
  
  const languageProps = {"langcode" : pageContext.langcode, "langURL" : getURLPath()+"/"+pageContext.langcode+"/","URLPrefix":getURLPath()};
   
    const ProductData = data.allNodeProducts.edges[0].node;
    const ProdutImage = siteConfig.assetURL+data.allNodeProducts.edges[0].node.relationships.field_image_p.uri.url;

    console.log(ProductData);
    console.log("languageProps product",languageProps);


    return (
      <HomeLayout languageProps ={languageProps}>

    <div className="container">
   

       
       <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
     
     <div className="col-lg-6">
       <h1 className="display-5 fw-bold lh-1 mb-3">  { ProductData.title} </h1>
       <p className="lead">{ProductData.body.value}</p>
     
     </div>

     <div className="col-10 col-sm-8 col-lg-6">
       <img src={ProdutImage}className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
     </div>
   </div>


 </div>
       

   
   </HomeLayout>
  )
}
 
export default Products

export const query = graphql `
    query ($langcode : String, $id : String ){
        
        allNodeProducts(filter: {langcode: {eq: $langcode}, id: {eq: $id}}) {
          edges {
            node {
              id
              title
              field_cta
              field_tags_hcm
              field_product_slug
              langcode
              body {
                value
              }
              relationships {
                field_image_p {
                  uri {
                    url
                  }
                }
              }
            }
          }
        }
        
      }
  `
