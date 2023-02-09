import React from 'react';

function BnbCard({ bnb }) {
    //Deconstruct the bnb object from json
    const { title, houseType, image, location, payment, host, rating } = bnb
    const { city, country } = location
    const { cost, description } = payment
    //const { name, isSuperhost } = host
    //const { stars, reviews } = rating

    return (
      <div className='bnb-card'>
        <p> { title } </p>
        <img src={ image } alt="property site" />
        <p> At { city }, { country } </p>
        <p> Price: { cost } </p>
        <p> Add to cart. </p>
      </div>
    );
  }
  
  export default BnbCard;