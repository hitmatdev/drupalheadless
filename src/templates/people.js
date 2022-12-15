import React from "react"
import HomeLayout from "../components/layouts/HomeLayout"
import {getTranslation, getPath, getURLPath} from '../utils/linkUtils';
import {siteConfig, Language}  from "../utils/config";
import { Link, useStaticQuery, graphql } from 'gatsby'


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
    
  }
`