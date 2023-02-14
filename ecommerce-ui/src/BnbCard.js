import React from 'react';

function BnbCard({ bnb, addToCart }) {

  //Deconstruct the bnb object from json
  const { title, houseType, image, location, payment, host, rating } = bnb;
  const { city, country } = location;
  const { cost, description } = payment;
  const { name, isSuperhost } = host;
  const { stars, reviews } = rating;

    return (
      <div className='bnb-card'>
        <p> <b>{title}</b> </p>
        <img src={image} alt="property site" />
        <p> {houseType} at {city}, {country} </p>
        <p> Price: ${cost} </p>
        <button onClick={() => addToCart(bnb)}> Add to cart </button>
      </div>
    );
  }
  
  export default BnbCard;