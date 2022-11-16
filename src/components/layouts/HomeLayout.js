import React from "react";
import {useStaticQuery, graphql } from 'gatsby';

const HomeLayout = ({children , languageProps}) => {
  
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
var languageURL =languageProps.langURL;
const about = languageURL+"about-us/"
const langCode = languageProps.langcode;
var homePage ="/"+langCode+"/home/";

console.log("languageURL",languageURL);
console.log("about",about);

 const companyName= data.site.siteMetadata.title;
    return (
   
   <main>
   
  
    <nav className="navbar navbar-light bg-primary d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 ">
    <a className="navbar-brand my-0 mr-md-auto  font-weight-normal text-white" href={homePage}>{companyName}</a>
    <ul className="nav nav-pills">
        <li className="nav-item"><a href={about} className="nav-link active"> About Us</a></li>
        <li className="nav-item"><a href="#" className="nav-link active">Products</a></li>
        <li className="nav-item"><a href="#" className="nav-link active">People</a></li>
       
         
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle nav-link active" href="#" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Language ({langCode})
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="dropdown-item"><a href="/en/home/" className="nav-link text-small">English</a></li>
          <li className="dropdown-item"><a href="/fr/home/" className="nav-link text-small">French (Français)</a></li>
          <li className="dropdown-item"><a href="/hi/home/" className="nav-link text-small" >Hindi (हिन्दी) </a></li>


 
          </ul>
        </li>
        <li className="nav-item"><a href="#" className="btn btn-outline-warning">Support</a></li>

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