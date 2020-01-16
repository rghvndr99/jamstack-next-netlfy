import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

import "../css/page/helpcenter.scss";
import { attributes ,react as HomeContent } from '../content/helpcenter.md';

const GiftCard = () => {
    let { title,Contact} = attributes; 
    console.log(Contact);   
  return (
    <div className="help-container">
      <p className="title"> <span>{title}</span></p>
      <div className="description"><HomeContent></HomeContent></div>
      <div class="list-group contect-details">
      {
        Contact.map((item,index)=>{        
        return (<a key={index} href="#" className="list-group-item">
          <span className="country-name">{item.country}</span>
          <span className="country-number"><i class="fa fa-phone" aria-hidden="true"></i>{item.ContactNo}</span>
        </a>);     
        
        })
      }
      </div>
      
    </div>
  );
};

export default GiftCard;