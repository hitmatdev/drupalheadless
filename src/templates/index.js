import * as React from "react"
import HomeLayout from "../components/layouts/HomeLayout";
import { Link, useStaticQuery, graphql } from 'gatsby'

import {siteConfig, Language}  from "../utils/config";
import {getTranslation, getPath, getURLPath} from '../utils/linkUtils';

import  People  from "../components/global/people";
import ProductList  from "../components/global/products";

export const query = graphql `
    query ($langcode : String ){
        nodeHeadlessPage(field_name: {eq: "Home"}, langcode: {eq: $langcode}) {
          id
          title
          field_name
          field_hero_text
          field_hero_cta
          field_hero_text_title
          field_section_one_cta
          field_section_one_body
          field_section_one_title
          langcode
          relationships {
            field_hero_image {
              id
              uri {
                url
              }
            }
            field_section_one_image {
              id
              uri {
                url
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
        allNodePeople(filter: {langcode: {eq: $langcode}}) {
          edges {
            node {
              id
              title
              field_people_name
              field_people_title
              field_people_slug
              langcode
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


const IndexPage = ({ data, pageContext }) => {
  
const urlPrefix = "";



  const HeroTitle = data.nodeHeadlessPage.field_hero_text_title;
  const HeroText = data.nodeHeadlessPage.field_hero_text;
  const HeroTextCTA = data.nodeHeadlessPage.field_hero_cta;
  const HeroImage = siteConfig.assetURL+data.nodeHeadlessPage.relationships.field_hero_image.uri.url;
  const sectionOneTitle = data.nodeHeadlessPage.field_section_one_title;
  const sectionOneBody = data.nodeHeadlessPage.field_section_one_body;
  
  const languageProps = {"langcode" : pageContext.langcode, "langURL" : getURLPath()+"/"+pageContext.langcode+"/","URLPrefix":getURLPath()};

  
  return (
  <HomeLayout languageProps ={languageProps}>
    
    <div className="container  ">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={HeroImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">{HeroTitle}</h1>
        <p className="lead">{HeroText}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <a href={urlPrefix+"about-us"} className="btn btn-outline-primary btn-lg px-4">{HeroTextCTA} </a>
        </div>
      </div>
    </div>
  </div>
    
    <div className="container px-4 py-5">
    <h2 className="pb-2 border-bottom">{getTranslation("products")}</h2>
    <ProductList products={data.allNodeProducts}></ProductList>

</div>

    
  <div className="container px-4 py-5">
    <h2 className="pb-2 border-bottom">{getTranslation("meet_the_team")}</h2>

    <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div className="d-flex flex-column align-items-start gap-2">
        <h3 className="fw-bold">{sectionOneTitle}</h3>
        <p className="lead">{sectionOneBody}</p>
        
        <div className="input-group mb-6">
  <input type="text" className="form-control" placeholder="Your email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  
</div>

        <a href="#" className="btn btn-outline-primary btn-lg px-4 btn-lg">Stay Connected</a>
      </div>
   
       
<People people={data.allNodePeople}></People>    
    </div>
  </div>






  </HomeLayout>
)
  };
export default IndexPage;



export const Head = () => <title>Home Page</title>
