import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'
import {siteConfig}  from "../../utils/config";

const ProductList = (props) => {
    
   
  const ProductData = props.products.edges;
    return (
        
        
<div className="row">
{ProductData.map((data, index) => {


var productImage = siteConfig.assetURL+data.node.relationships.field_image_p.uri.url;
return (



<div className="col-4" key={index}> 
  <div className="card  border-0">
    <img src={productImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.node.title}</h5>
          <p className="card-text">{data.node.body.value}</p>
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