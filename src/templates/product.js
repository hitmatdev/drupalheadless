import React from "react"

import HomeLayout from "../components/layouts/HomeLayout"

const Products = ({ pageContext }) => {
  

  console.log("pageContext",pageContext);
    return (
   <HomeLayout>

    <div className="container">
       <h1> { /*pageContext.story.node.title */} Product Page</h1>

    </div>
   </HomeLayout>
  )
}
 
export default Products