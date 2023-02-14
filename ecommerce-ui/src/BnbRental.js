import React from 'react';
import PropTypes from 'prop-types';

function BnbRental({ bnb, removeFromCart }) {

  //Deconstruct the bnb object from json
  const { title, houseType, image, location, payment, host, rating } = bnb;
  const { city, country } = location;
  const { cost, description } = payment;
  const { name, isSuperhost } = host;
  const { stars, reviews } = rating;

    return (
      <div className='bnb-rental'>
        <p> <b>{title}</b> <br></br>
        {houseType} at {city}, {country} <br></br>
        ${cost} </p>
        <button onClick={() => removeFromCart(bnb)}> Remove from cart </button>
      </div>
    );
  }
  
  BnbRental.propTypes = {
    bnb: PropTypes.object.isRequired,
    removeFromCart: PropTypes.func.isRequired
  }

  export default BnbRental;