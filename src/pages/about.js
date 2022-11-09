import * as React from "react"
import HomeLayout from "../components/layouts/HomeLayout";
import { Link, useStaticQuery, graphql } from 'gatsby'

import { siteConfig } from "../config";
import  People  from "../components/global/people";
import ProductList  from "../components/global/products";



const IndexPage = ({siteMetadata}) => {
  
  const data = useStaticQuery(graphql`
    query {
      nodeHeadlessPage(field_name: {eq: "Home"}) {
        id
        title
        field_name
        field_hero_text
        field_hero_cta
        field_hero_text_title
        field_section_one_cta
        field_section_one_body
        field_section_one_title
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
    }
  `)

 


  const HeroTitle = data.nodeHeadlessPage.field_hero_text_title;
  const HeroText = data.nodeHeadlessPage.field_hero_text;
  const HeroTextCTA = data.nodeHeadlessPage.field_hero_cta;
  const HeroImage = siteConfig.assetURL+data.nodeHeadlessPage.relationships.field_hero_image.uri.url;
  
  const sectionOneTitle = data.nodeHeadlessPage.field_section_one_title;
  const sectionOneBody = data.nodeHeadlessPage.field_section_one_body;


  
  console.log("siteConfig",siteConfig);

  return (
  <HomeLayout>



    
  <div className="container">

    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{HeroTitle}</h1>
        <p className="col-md-8 fs-4">{HeroText} {sectionOneBody}</p>
      </div>
    </div>

    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border-0 rounded-3">
          <h2>{sectionOneTitle}</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button className="btn btn-outline-primary" type="button">Example button</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border-0 rounded-3">
          <h2>Add borders</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button className="btn btn-outline-primary" type="button">Example button</button>
        </div>
      </div>
    </div>

    <div class="p-4">

<h2 className="pb-2 border-bottom">Products</h2>

</div>
    <ProductList></ProductList>

    </div>
 

  </HomeLayout>
)
  };
export default IndexPage;



export const Head = () => <title>Home Page</title>
