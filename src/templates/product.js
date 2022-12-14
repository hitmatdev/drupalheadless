import React from "react"

import HomeLayout from "../components/layouts/HomeLayout"
import {getURLPath, getTranslation} from '../utils/linkUtils';
import { Link, useStaticQuery, graphql } from 'gatsby'
import {siteConfig}  from "../utils/config";
import ProductList  from "../components/global/products";



const Products = ({ data, pageContext }) => {
  

console.log("daya",data);

  const languageProps = {"langcode" : pageContext.langcode, "langURL" : getURLPath()+"/"+pageContext.langcode+"/","URLPrefix":getURLPath()};
   
    const ProductData = data.product.edges[0].node;
    const ProdutImage = siteConfig.assetURL+data.product.edges[0].node.relationships.field_image_p.uri.url;

    console.log(ProductData);
    console.log("languageProps product",languageProps);


    return (
      <HomeLayout languageProps ={languageProps}>

<div className="container">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
     
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3"> { ProductData.title}</h1>
        <div dangerouslySetInnerHTML={ { __html: ProductData.body.value } }></div>
        <p> <span className="badge text-bg-info">{ProductData.field_product_results}</span>
</p>
      </div>
      
      <div className="col-10 col-sm-8 col-lg-6">
      <img src={ProdutImage}className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" loading="lazy"/>
      </div>

    </div>
  </div>




    <div className="container">

     <div className="row flex-lg-row-reverse">
     
     <div className="col-lg-10">
      
       <p className="fw-light">{ProductData.field_product_description}</p>

  
     
     </div>
   </div>
   


 </div>

 <div className="container px-4 py-5">
    <h2 className="pb-2 border-bottom">{getTranslation("products",pageContext.langcode)}</h2>
    <ProductList products={data.products}></ProductList>

</div>
       

   
   </HomeLayout>
  )
}
 
export default Products

export const query = graphql `
    query($langcode: String, $id: String) {
      product: allNodeProducts(filter: {langcode: {eq: $langcode}, id: {eq: $id}}) {
        edges {
          node {
            id
            title
            field_cta
            field_tags_hcm
            field_product_slug
            field_product_description
            field_product_results
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
      products: allNodeProducts (filter: {langcode: {eq: $langcode}})  {
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

  