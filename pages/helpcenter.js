import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

import "../css/page/giftCard.scss";
import { attributes ,react as HomeContent } from '../content/helpcenter.md';

const GiftCard = () => {
    let { title} = attributes;    
  return (
    <div className="gift-card-container">
      <p className="title"> <span>{title}</span></p>
      <div className="description"><HomeContent></HomeContent></div>
    </div>
  );
};

export default GiftCard;