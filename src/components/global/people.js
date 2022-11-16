import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'
import {siteConfig}  from "../../utils/config";

const People = (props) => {
  

  const PeopleData =  props.people.edges;



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
          <p className="text-center"><a href={"/"+data.node.langcode+"/"+data.node.field_people_slug} className="btn btn-outline-primary">{data.node.field_people_name}'s Bio</a></p>
        </div>
 
 )
      })}

      </div>

  );
};
export default People;