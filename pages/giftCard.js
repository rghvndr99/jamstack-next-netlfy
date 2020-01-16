import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

import "../css/page/cart.scss";
import { attributes } from '../content/home.md';

const GiftCard = (props) => {
    let { title, description } = attributes;
  return (
    <article>
         <h1>gift card {title} {description}</h1>
  </article>
  );
};

export default GiftCard;