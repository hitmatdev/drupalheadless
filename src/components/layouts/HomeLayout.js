import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'

const HomeLayout = ({ children }) => {
  
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
   
   <main>
   
  
    <nav className="navbar navbar-light bg-primary d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 ">
    <a className="navbar-brand my-0 mr-md-auto  font-weight-normal text-white" href="/">{companyName}</a>
    <ul className="nav nav-pills">
        <li className="nav-item"><a href="/about" className="nav-link active">About</a></li>
        <li className="nav-item"><a href="#" className="nav-link active">Products</a></li>
        <li className="nav-item"><a href="#" className="nav-link active">People</a></li>
       
      </ul>
    
</nav>
     
   

  

{children} 


<div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p className="text-center text-muted">© 2022 {companyName}, Inc</p>
  </footer>
</div>
</main>

  );
};
export default HomeLayout;