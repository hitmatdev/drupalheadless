import { useLocation } from '@reach/router';
import {i18nText } from './config';


const setLang = (event, lang) => {
    localStorage.setItem("lang", lang);
    var URLPrefix = getPath();
    window.location.href = URLPrefix;
  };

 
const setDefaultLang = () => 
{
  
   if (localStorage.getItem('lang') !== null) {
       return localStorage.getItem("lang");
   } else {
    localStorage.setItem("lang", "en");
       return "en";
   }
 };
 
const getLang = () => 
 {
   
    if (localStorage.getItem('lang') !== null) {
        return localStorage.getItem("lang");
    } else {
        
        return "en";
    }
  };
  
 const getPath = () => 
 {

    var urlPrefix  = window.location.origin;
    var lang =  getLang();
    

    
    if(lang =="fr")
    urlPrefix = urlPrefix + "/fr/";
    else if(lang =="hi")
    urlPrefix = urlPrefix + "/hi/";
    else
    urlPrefix = urlPrefix+"/"

    

    return urlPrefix;
  
 };


 const getTranslation = (key) => 
 {
    var lang =  getLang();

    const trans = i18nText[lang][key];
   
    return trans;

  
 };


  const Language = getLang();
  
  export {setLang, getLang, Language, getTranslation, getPath}