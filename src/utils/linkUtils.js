import { useLocation } from '@reach/router';
import {i18nText } from './config';


const setLang = (event, lang) => 
{
    if (typeof window !== 'undefined') 
    {
    
    localStorage.setItem("lang", lang);
     var URLPrefix = getPath();
     window.location.href = URLPrefix;
    }
  };

 
const setDefaultLang = () => 
{
    if (typeof window !== 'undefined') 
    {
   
        if (localStorage.getItem('lang') !== null) {
            return localStorage.getItem("lang");
        } else {
            localStorage.setItem("lang", "en");
            return "en";
        }
    }
 };
 
const getLang = () => 
 {
    if (typeof window !== 'undefined') 
    {
            if (localStorage.getItem('lang') !== null) {
                return localStorage.getItem("lang");
            } else {
                
                return "en";
            }
    } 
  };
  
 const getPath = () => 
 {

    if (typeof window !== 'undefined') 
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
    }
  
 };

 const getURLPath = () => 
 {

    if (typeof window !== 'undefined') 
    {
    
    var urlPrefix  = window.location.origin;
    return urlPrefix;
    }
  
 };

 const getTranslation = (key) => 
 {
    if (typeof window !== 'undefined') 
    {
    
    
    var lang =  getLang();

    const trans = i18nText[lang][key];
   
    return trans;
    }

  
 };


  const Language = getLang();
  
  export {setLang, getLang, Language, getTranslation, getPath, getURLPath}