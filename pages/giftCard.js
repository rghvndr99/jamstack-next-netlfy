import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

import "../css/page/giftCard.scss";
import { attributes } from '../content/home.md';

const GiftCard = () => {
    let { title, description } = attributes;
  return (
    <div className="gift-card-container">
      <p className="title"> {title}</p>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default GiftCard;