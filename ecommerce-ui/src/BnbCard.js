import React from 'react';
import PropTypes from 'prop-types';

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
      <p> {houseType} at {city}, {country} <br></br> Price: ${cost} </p>
      <button onClick={() => addToCart(bnb)}> Add to cart </button>
    </div>
  );
}

BnbCard.propTypes = {
    bnb: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
  };
  
  export default BnbCard;