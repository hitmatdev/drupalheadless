import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'
import { siteConfig } from "../../config";

const ProductList = ({ children }) => {
  
    const data = useStaticQuery(graphql`
    query {
      allNodeProducts {
        edges {
          node {
            id
            field_cta
            field_tags_hcm
            title
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
  `)
  const ProductData = data.allNodeProducts.edges;
    return (
        
        
<div className="row">
{ProductData.map((data, index) => {


var productImage = siteConfig.assetURL+data.node.relationships.field_image_p.uri.url;
return (



<div className="col-4" > 
  <div className="card  border-0">
    <img src={productImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.node.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-outline-primary">{data.node.field_cta}</a>
        </div>
    </div>
  </div>



 
 )
      })}

      </div>

  );
};
export default ProductList;