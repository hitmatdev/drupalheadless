import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'
import { siteConfig } from "../../config";

const People = ({ children }) => {
  
    const data = useStaticQuery(graphql`
    query {
      allNodePeople {
        edges {
          node {
            id
            title
            field_people_name
            field_people_title
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
  `)
  const PeopleData = data.allNodePeople.edges;

  console.log(data);
    return (
        
        <div className="row row-cols-1 row-cols-sm-2 g-4">

{PeopleData.map((data, index) => {


var peopleImage = siteConfig.assetURL+data.node.relationships.field_people_image.uri.url;
return (
  <div className="d-flex flex-column gap-2" key={index}>
        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center  bg-gradient fs-4 rounded-3">
           <img src ={peopleImage} width="250px"></img>
          </div>
          <h4 className="fw-semibold mb-0 text-center">{data.node.field_people_name}</h4>
          <p className="text-muted text-center">{data.node.field_people_title}</p>
        </div>
 
 )
      })}

      </div>

  );
};
export default People;