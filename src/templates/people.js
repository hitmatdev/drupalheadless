import React from "react"
import HomeLayout from "../components/layouts/HomeLayout"
import {getPath, getURLPath, getTranslation} from '../utils/linkUtils';
import {siteConfig, Language}  from "../utils/config";
import { Link, useStaticQuery, graphql } from 'gatsby'
import ProductList  from "../components/global/products";


const People = ({ data, pageContext }) => {
  
  const languageProps = {"langcode" : pageContext.langcode, "langURL" : getURLPath()+"/"+pageContext.langcode+"/","URLPrefix":getURLPath()};
  const PeopleData = data.allNodePeople.edges[0].node;
  const PeopleImage = siteConfig.assetURL+data.allNodePeople.edges[0].node.relationships.field_people_image.uri.url;

 console.log("languageProps People",languageProps);

  return (
    <HomeLayout languageProps ={languageProps}>

<div className="container">
   

       
   <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
 
 <div className="col-lg-6">
   <h1 className="display-5 fw-bold lh-1 mb-3">  { PeopleData.field_people_name} </h1>
   <p className="lead">{PeopleData.field_people_title}</p>
   <p className="text-success"> {PeopleData.field_people_qualification} </p>
   <p className="text-muted">{PeopleData.field_people_summary}</p>
   
 </div>



 <div className="col-10 col-sm-8 col-lg-6">
   <img src={PeopleImage}className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="300"  loading="lazy"/>

 </div>
</div>

<div className="card">
  <div className="card-header">
    <h3>News</h3>
  </div>
  <div className="card-body">
  <p className="text-muted">{PeopleData.field_people_news}</p>
  </div>
</div>


</div>

<div className="container px-4 py-5">
    <h2 className="pb-2 border-bottom">{getTranslation("products",pageContext.langcode)}</h2>
    <ProductList products={data.allNodeProducts}></ProductList>

</div>
     

 
 </HomeLayout>
)
}
 
export default People

export const query = graphql `

query ($langcode : String, $id : String ){
        
  allNodePeople(filter: {langcode: {eq: $langcode}, id: {eq: $id}}) {
      edges {
        node {
          title
          field_people_name
          field_people_title
          field_people_slug
          field_people_qualification
          field_people_news
          langcode
          
          field_people_summary
          relationships {
            field_people_image {
              uri {
                url
              }
            }
          }
        }
      }
    }
  allNodeProducts (filter: {langcode: {eq: $langcode}})  {
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