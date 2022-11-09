import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'

const Global = ({ children }) => {
  
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
 const companyName= data.site.siteMetadata.title;
    return (
        
        <div className="row row-cols-1 row-cols-sm-2 g-4">

            Test
       
        </div>

  );
};
export default Global;