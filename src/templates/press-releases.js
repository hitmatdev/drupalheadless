import * as React from "react"
import HomeLayout from "../components/layouts/HomeLayout";
import { Link, useStaticQuery, graphql } from 'gatsby'

import { siteConfig } from "../utils/config";
import ProductList  from "../components/global/products";
import {getTranslation, getPath, getURLPath} from '../utils/linkUtils';


const PressReleases = ({ data, pageContext }) => {

 const allNodePressRelease = data.allNodePressRelease.nodes[0];
 const HeroTitle = allNodePressRelease.field_press_title;
 const PressBody = allNodePressRelease.body.processed;


 const languageProps = {"langcode" : pageContext.langcode, "langURL" : getURLPath()+"/"+pageContext.langcode+"/","URLPrefix":getURLPath()};

  

  return (
<HomeLayout languageProps ={languageProps}>

<div className="container  ">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
     
      <div className="col-lg-10">
        <h1 className="display-5 fw-bold lh-1 mb-3"> {HeroTitle}</h1>
        <p className="lead"  dangerouslySetInnerHTML={{__html: PressBody}}></p>
      
      </div>

     
    </div>
  </div>

    
  <div className="container">


  

   

    </div>
 

  </HomeLayout>
)
  };
export default PressReleases;



export const Head = () => <title>Press Release</title>

export const query = graphql `
  query ($langcode : String , $id: String) {
    allNodePressRelease(filter: {langcode: {eq: $langcode}, id: {eq: $id}}) {
        edges {
            node {
              id
            }
          }
          nodes {
            field_press_reference
            field_press_title
            body {
              format
              summary
              processed
            }
          }
      }
  }
  `