import * as React from "react"
import HomeLayout from "../components/layouts/HomeLayout";
import { Link, useStaticQuery, graphql } from 'gatsby'

import { siteConfig } from "../utils/config";
import ProductList  from "../components/global/products";
import {getTranslation, getPath, getURLPath} from '../utils/linkUtils';


const AboutUs = ({ data, pageContext }) => {

 const allNodeInnerPageData = data.allNodeInnerPage.edges[0].node;
 const HeroTitle = allNodeInnerPageData.field_inner_hero_title;
 const HeroText = allNodeInnerPageData.field_inner_hero_body;
  
 const HeroImage = siteConfig.assetURL+allNodeInnerPageData.relationships.field_inner_hero_image.uri.url;
  
 const PageSection = allNodeInnerPageData.field_inner_section_title;
 const PageSectionBody = allNodeInnerPageData.field_inner_section_body;

 const languageProps = {"langcode" : pageContext.langcode, "langURL" : getURLPath()+"/"+pageContext.langcode+"/","URLPrefix":getURLPath()};

  
  console.log("allNodeInnerPageData",allNodeInnerPageData);

  return (
<HomeLayout languageProps ={languageProps}>

<div className="container  ">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
     
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3"> {HeroTitle}</h1>
        <p className="lead">{HeroText}</p>
      
      </div>

      <div className="col-10 col-sm-8 col-lg-6">
        <img src={HeroImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
    </div>
  </div>

    
  <div className="container">


  

    <div className="p-5 mb-4 bg-primary text-white rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold col-md-8">{PageSection[0]}</h1>
        <p className="col-md-12 fs-4">{PageSectionBody[0]}</p>
      </div>
    </div>

    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 bg-primary text-white border-0 rounded-3">
          <h2>{PageSection[1]}</h2>
          <p>{PageSectionBody[1]}</p>
          <button className="btn btn-outline-primary" type="button">{getTranslation("know_more",pageContext.langcode)}</button>        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-primary text-white border-0 rounded-3">
          <h2>{PageSection[2]}</h2>
          <p>{PageSectionBody[2]}</p>
          <button className="btn btn-outline-primary" type="button">{getTranslation("know_more",pageContext.langcode)}</button>        </div>
      </div>
    </div>

    <div className="p-4">

<h2 className="pb-2 border-bottom">Products</h2>
<ProductList products={data.allNodeProducts}></ProductList>


</div>
   

    </div>
 

  </HomeLayout>
)
  };
export default AboutUs;



export const Head = () => <title>Home Page</title>

export const query = graphql `
  query ($langcode : String ) {
    allNodeInnerPage(filter: {langcode: {eq: $langcode}}) {
      edges {
        node {
          id
          field_inner_section_title
          field_inner_section_body
          field_inner_hero_title
          field_inner_hero_body
          langcode
          relationships {
            field_inner_hero_image {
              uri {
                url
              }
            }
          }
        }
      }
    }
    allNodeProducts(filter: {langcode: {eq: $langcode}}) {
        edges {
          node {
            id
            title
            field_cta
            field_tags_hcm
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