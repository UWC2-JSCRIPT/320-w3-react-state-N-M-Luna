import React from 'react';

function BnbRental({ bnb, removeFromCart }) {

  //Deconstruct the bnb object from json
  const { title, houseType, image, location, payment, host, rating } = bnb;
  const { city, country } = location;
  const { cost, description } = payment;
  const { name, isSuperhost } = host;
  const { stars, reviews } = rating;

    return (
      <div className='bnb-rental'>
        <button onClick={() => removeFromCart(bnb)}> X </button>
        <p> <b>{title}</b> <br></br>
        {houseType} at {city}, {country} <br></br>
        ${cost} </p>
      </div>
    );
  }
  
  export default BnbRental;