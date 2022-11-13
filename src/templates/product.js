import React from "react"

import HomeLayout from "../components/layouts/HomeLayout"
import {getURLPath} from '../utils/linkUtils';

const Products = ({ pageContext }) => {
  
  const languageProps = {"langcode" : pageContext.langcode, "langURL" : getURLPath()+"/"+pageContext.langcode+"/","URLPrefix":getURLPath()};


    return (
      <HomeLayout languageProps ={languageProps}>

    <div className="container">
       <h1> { /*pageContext.story.node.title */} Product Page</h1>

    </div>
   </HomeLayout>
  )
}
 
export default Products