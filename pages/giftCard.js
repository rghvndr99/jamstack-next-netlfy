import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

import "../css/page/giftCard.scss";
import { attributes ,react as HomeContent } from '../content/home.md';

const GiftCard = () => {
    let { title, description } = attributes;
    console.log(title,description);
  return (
    <div className="gift-card-container">
      <p className="title"> {title}</p>
      <div className="description"><HomeContent></HomeContent></div>
    </div>
  );
};

export default GiftCard;