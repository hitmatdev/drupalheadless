import React from "react"

import HomeLayout from "../components/layouts/HomeLayout"

const People = ({ pageContext }) => {
  
  console.log("pageContext",pageContext);
    return (
   <HomeLayout>

    <div className="container">
       <h1> People Page</h1>

    </div>
   </HomeLayout>
  )
}
 
export default People