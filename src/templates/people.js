import React from "react"

import HomeLayout from "../components/layouts/HomeLayout"
import {getTranslation, getPath, getURLPath} from '../utils/linkUtils';

const People = ({ pageContext }) => {
  
 const languageProps = {"langcode" : pageContext.langcode, "langURL" : getURLPath()+"/"+pageContext.langcode+"/","URLPrefix":getURLPath()};

  console.log("pageContext",pageContext);
    return (

      <HomeLayout languageProps ={languageProps}>

    <div className="container">
       <h1> People Page</h1>

    </div>
    </HomeLayout>

  )
}
 
export default People