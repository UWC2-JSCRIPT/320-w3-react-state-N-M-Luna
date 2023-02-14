import React from 'react';
import BnbRental from './BnbRental.js';
import PropTypes from 'prop-types';

function ShoppingCart({ bnbsInCart, totalCost, removeFromCart }) {

  const tripOutline = bnbsInCart.map((bnb, i) => (
    <BnbRental key={i} bnb={bnb} removeFromCart={removeFromCart} />
  ))
  
    return (
      <div className='shopping-cart'> 
      <h3>Your trip</h3>
        <div>
          {bnbsInCart.length === 0 && <p>Add a stop to your trip.</p>}
        </div>
        {tripOutline}
      <p>Your total on this trip: ${totalCost}</p>
      </div>
    );
  }

  ShoppingCart.propTypes = {
    bnbsInCart: PropTypes.array.isRequired,
    totalCost: PropTypes.number.isRequired,
    removeFromCart: PropTypes.func.isRequired
  };
  
  export default ShoppingCart;