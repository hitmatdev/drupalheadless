import { useLocation } from '@reach/router';
import {i18nText } from './config';

//Local storage functions are not used anymore
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


 //These two functions are in use only
 const getURLPath = () => 
 {

    if (typeof window !== 'undefined') 
    {
    
    var urlPrefix  = window.location.origin;
    return urlPrefix;
    }
  
 };

 const getTranslation = (key, langcode) => 
 {
    if (typeof window !== 'undefined') 
    {
    
    const trans = i18nText[langcode][key];
   
    return trans;
    }

  
 };


  
  export {setLang, getLang,getTranslation, getPath, getURLPath}