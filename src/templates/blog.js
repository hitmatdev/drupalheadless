import React from "react"

import HomeLayout from "../components/layouts/HomeLayout"

const Blogs = ({ pageContext }) => {
  
  console.log("pageContext",pageContext);
    return (
   <HomeLayout>

    <div className="container">
       <h1> {pageContext.story.node.title}</h1>

    </div>
   </HomeLayout>
  )
}
 
export default Blogs