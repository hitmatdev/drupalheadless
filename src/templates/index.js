import * as React from "react"
import HomeLayout from "../components/layouts/HomeLayout";
import { Link, useStaticQuery, graphql } from 'gatsby'

import {siteConfig, Language}  from "../utils/config";
import {getTranslation, getPath, getURLPath} from '../utils/linkUtils';

import  People  from "../components/global/people";
import ProductList  from "../components/global/products";

export const query = graphql `
query ($langcode: String) {
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
  allNodeInnerPage(filter: {langcode: {eq: $langcode}}) {
    edges {
      node {
        id
        field_inner_section_body
        field_inner_section_title
      }
    }
  }
  allNodePressRelease(filter: {langcode: {eq: $langcode}}){
    nodes {
      langcode
      field_press_slug
      id
      field_press_title
      field_press_reference
      field_press_date(fromNow: true)
    }
  }
}`


const IndexPage = ({ data, pageContext }) => {
  



  const HeroTitle = data.nodeHeadlessPage.field_hero_text_title;
  const HeroText = data.nodeHeadlessPage.field_hero_text;
  const HeroTextCTA = data.nodeHeadlessPage.field_hero_cta;
  const HeroImage = siteConfig.assetURL+data.nodeHeadlessPage.relationships.field_hero_image.uri.url;
  const sectionOneTitle = data.nodeHeadlessPage.field_section_one_title;
  const sectionOneBody = data.nodeHeadlessPage.field_section_one_body;
  
  const languageProps = {"langcode" : pageContext.langcode, "langURL" : getURLPath()+"/"+pageContext.langcode+"/","URLPrefix":getURLPath()};

  const allNodeInnerPageData = data.allNodeInnerPage.edges[0].node;

  
 const PageSection = allNodeInnerPageData.field_inner_section_title;
 const PageSectionBody = allNodeInnerPageData.field_inner_section_body;

const Press = data.allNodePressRelease.nodes; 

console.log("Press",Press);
  
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
          <a href="../about-us" className="btn btn-outline-primary btn-lg px-4">{HeroTextCTA} </a>
        </div>
      </div>
    </div>

    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border-0 rounded-3">
          <h2>{PageSection[1]}</h2>
          <p>{PageSectionBody[1]}</p>
          <button className="btn btn-outline-primary" type="button">{getTranslation("know_more",pageContext.langcode)}</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border-0 rounded-3">
          <h2>{PageSection[2]}</h2>
          <p>{PageSectionBody[2]}</p>
          <button className="btn btn-outline-primary" type="button">{getTranslation("know_more",pageContext.langcode)}</button>
        </div>
      </div>
    </div>
    

  </div>
    
    <div className="container px-4 py-5">
    <h2 className="pb-2 border-bottom">{getTranslation("products",pageContext.langcode)}</h2>
    <ProductList products={data.allNodeProducts}></ProductList>

</div>

    
  <div className="container px-4 py-5">


  <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold col-md-8">{PageSection[0]}</h1>
        <p className="col-md-12 fs-4">{PageSectionBody[0]}</p>
      </div>
    </div>

    <h2 className="pb-2 border-bottom">{getTranslation("meet_the_team",pageContext.langcode)}</h2>

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

    <h2 className="pb-2 border-bottom">Press Releases</h2>

    <div >


{Press.map((data, index) => {


return (


<div className="card mt-3">
<div className="card-body">
<p className="text-secondary">{data.field_press_title}</p>
<p className="text-small text-info">{data.field_press_date} {data.field_press_reference} </p>
<p><a href={"/"+data.langcode+"/"+data.field_press_slug} className="btn btn-outline-primary">More</a></p>
</div>
</div>

)
    })}

    </div>





  </div>

 


  </HomeLayout>
)
  };
export default IndexPage;



export const Head = () => <title>Home Page</title>
